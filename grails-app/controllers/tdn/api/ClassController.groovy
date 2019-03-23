package tdn.api

import br.com.caelum.stella.boleto.Banco
import br.com.caelum.stella.boleto.Beneficiario
import br.com.caelum.stella.boleto.Boleto
import br.com.caelum.stella.boleto.Datas
import br.com.caelum.stella.boleto.Endereco
import br.com.caelum.stella.boleto.Pagador
import br.com.caelum.stella.boleto.bancos.BancoDoBrasil
import br.com.caelum.stella.boleto.bancos.Itau
import br.com.caelum.stella.boleto.bancos.Santander
import br.com.caelum.stella.boleto.transformer.GeradorDeBoleto
import com.tdnsecuredrest.Authority
import com.tdnsecuredrest.User
import com.tdnsecuredrest.UserAuthority
import grails.async.Promise
import grails.converters.JSON
import org.apache.commons.lang3.ObjectUtils
import org.grails.web.json.JSONArray
import grails.http.client.AsyncHttpBuilder
import grails.http.client.HttpClientResponse
import org.grails.web.json.JSONObject

class ClassController {
    transient springSecurityService
    static transients = ['springSecurityService']

    def getAllClasses(Long max, Long offset) {
        def au = User.findById(springSecurityService.principal.id)
        def classes = Class.findAllByTeacher(au, [max: max, offset: offset])
        classes += UserClass.findAllByUser(au, [max: max, offset: offset]).clazz
        render classes as JSON
    }

    def getClazz(Long id) {
        User au = User.get(springSecurityService.principal.id)
        Class cs = Class.get(id)
        def quizList = Quiz.findAllByClazz(cs)
        def activityList = ClassActivity.findAllByClazz(cs)
        if (UserClass.countByUserAndClazz(au, cs)) {
            JSONArray arr = new JSONArray()
            for (ql in quizList) {
                QuizAnswer qa = QuizAnswer.findByStudentAndQuiz(au, ql)
                def json = JSON.parse((ql as JSON).toString())
                if (qa != null) {
                    if (qa.evaluation != null) {
                        json.put("evaluated", true)
                        json.put("evaluation", qa.evaluation)
                    }
                }
                arr.put(json)
            }
            def actjson = JSON.parse((activityList as JSON).toString())
            if (actjson) {
                for (a in actjson)
                    arr.put(a)
            }
            render arr as JSON
        } else if (cs.teacher == au) {
            for (a in activityList) {
                a.uri += '/teacher'
            }
            quizList += activityList
            render quizList as JSON
        } else {
            render(status: 401, [] as JSON)
        }
    }

    def enterClass(Class bug) {
        String classAccessCode = bug.classAccessCode
        if (Class.countByClassAccessCode(classAccessCode)) {
            User au = User.get(springSecurityService.principal.id)
            Class clazz = Class.findByClassAccessCode(classAccessCode)
            if (au == clazz.teacher) {
                render(status: 401, {} as JSON)
                return
            }
            UserClass userClass = new UserClass(user: au, clazz: clazz)
            userClass.save(flush: true, failOnError: true)
            render(status: 200, clazz as JSON)
        } else {
            render(status: 401, [] as JSON)
        }
    }

    def createClass(Class clazz) {
        User au = User.get(springSecurityService.principal.id)
        clazz.teacher = au
        clazz.active = true
        def classAccessCode = UUID.randomUUID().toString()
        clazz.classAccessCode = classAccessCode
        clazz.save(flush: true, failOnError: true)
        render clazz as JSON
    }

    def classCount() {
        def au = User.findById(springSecurityService.principal.id)
        def count = ['']
        if (UserAuthority.findByUserAndAuthority(au, Authority.findByAuthority("ROLE_TEACHER"))) {
            count = ['classCount': Class.countByTeacher(au)]
        } else {
            count = ['classCount': UserClass.countByUser(au)]
        }
        render count as JSON
    }

    def createActivity(Long id) {
        def au = User.findById(springSecurityService.principal.id)
        def activity = new ClassActivity(request.JSON as JSONObject)
        activity.clazz = Class.findById(id)
        if (activity.clazz.teacher != au) {
            render(status: 401, {} as JSON)
            return
        }
        activity.save(flush: true, failOnError: true)
        activity.uri = '/classes/' + id + '/activity/' + activity.id
        activity.save(flush: true, failOnError: true)
        render(status: 201, activity as JSON)
        AsyncHttpBuilder client = new AsyncHttpBuilder()
        for (userclass in UserClass.findAllByClazz(activity.clazz))
            sendEmail(activity.clazz.teacher.name + ", from " + activity.clazz.name + ", posted a new activity at TDVLE. Click <a href='https://the-dank-network.herokuapp.com/classes/" + activity.clazz.id + "/activity/" + activity.id + "'>here</a> to view this activity.", userclass.user.email, "New activity at TDVLE", client)
    }

    def getActivity(Long id) {
        def au = User.findById(springSecurityService.principal.id)
        def activity = ClassActivity.findById(id)
        //linha deu um erro uma vez
        def cs = activity.clazz
        if (UserClass.countByUserAndClazz(au, cs) || cs.teacher == au) {
            render(status: 200, activity as JSON)
        } else
            render(status: 401, {} as JSON)
    }

    def getSubmissions(Long id) {
        def au = User.findById(springSecurityService.principal.id)
        def activity = ClassActivity.findById(id)
        def ua = UserActivity.findByActivityAndUser(activity, au)
        def subs = []
        if (ua)
            subs = ua.submissions
        render(status: 200, subs as JSON)
    }

    def addSubmissions(Long id) {
        def au = User.findById(springSecurityService.principal.id)
        def activity = ClassActivity.findById(id)
        if (new Date() > activity.dueDate) {
            render(status: 401, {} as JSON)
            return
        }
        def submissions = []
        def inputarray = request.JSON as JSONArray
        def ua = UserActivity.findByActivityAndUser(activity, au)
        if (!ua)
            ua = new UserActivity(user: au, activity: activity)
        ua.submissions = []
        ua.save(flush: true, failOnError: true)
        def submissions2 = Submission.findAllByUserActivity(ua)
        for (sub in submissions2) {
            sub.delete(flush: true, failOnError: true)
        }
        for (sub in inputarray) {
            def nsub = new Submission(sub as JSONObject)
            nsub.userActivity = ua
            submissions += nsub
        }
        ua.submissions = submissions
        ua.save(flush: true, failOnError: true)
        render(status: 201, ua as JSON)
    }

    def getAllSubmissions(Long id) {
        def au = User.findById(springSecurityService.principal.id)
        def activit = ClassActivity.findById(id)
        def cs = activit.clazz
        if (au != cs.teacher) {
            render(status: 401, {} as JSON)
            return
        }
        def uas = UserActivity.findAllByActivity(activit)
        def allSubs = []
        for (u in uas) {
            def asubs = Submission.findAllByUserActivity(u)
            if (asubs.size() == 0)
                continue
            allSubs += [submissions: asubs]
        }
        render allSubs as JSON
    }

    def getReport(Long id) {
        def au = User.findById(springSecurityService.principal.id)
        def clazz = Class.findById(id)
        def students = UserClass.findAllByClazz(clazz).user
        double totalStudents = students.size()
        def activities = ClassActivity.findAllByClazz(clazz)
        def quizzes = Quiz.findAllByClazz(clazz)
        double med = 0, medquizz = 0
        def submissionPerActivity = [], filesArrayPerActivity = [], ii = 0, chartData
        def byStudentArray = []
        for (int i = 0; i < totalStudents; i++) {
            def data = []
            def heatArray = []
            for (int j = 0; j < activities.size(); j++) {
                def seriesArray = []
                seriesArray.add(["name": "Done", "value": 58000])
                def val = heatArray.count{h -> h['name'] == activities[j].title}
                if (val > 0)
                    heatArray.add(["name": activities[j].title + " (" + (val + 1) + ")", "series": seriesArray])
                else
                    heatArray.add(["name": activities[j].title, "series": seriesArray])
            }
            def gradesHistogram = []
            for (int j = 0; j < 10; j++) {
                gradesHistogram.add(["name": "<= " + ((j + 1) * 10) + "%", "value": 0])
            }
            data.add(["name": "Delivered", "value": 0])
            data.add(["name": "Missing", "value": 0])
            byStudentArray.add(["name": students[i].name, "general": data, "heatMap": heatArray, "gradeHistogram": gradesHistogram, "meanGrade": 0.0f, "meanDeliveryRate": 0.0f])
        }
        for (ca in activities) {
            def filesArray = []
            for (int i = 0; i < 11; i++)
                filesArray.add(["name": i < 10 ? String.valueOf(i) : i + "+", "value": 0])
            chartData = []
            chartData.add(["name": "Delivered", "value": 0])
            chartData.add(["name": "Missing", "value": totalStudents])
            submissionPerActivity.add(["name": ca.title, "chartData": chartData])
            if (totalStudents == 0)
                continue
            def count = 0, totfiles = 0, count2 = 0
            int iii = 0
            for (u in students) {
                int totalfiles = Submission.countByUserActivity(UserActivity.findByActivityAndUser(ca, u))
                totfiles += totalfiles
                count2++
                filesArray[Math.min(totalfiles, 10)]["value"]++
                def haveSubmitted = UserActivity.countByActivityAndUser(ca, u)
                count += haveSubmitted
                submissionPerActivity[ii]["chartData"][0]["value"] += haveSubmitted
                if (haveSubmitted) {
                    byStudentArray[iii]["meanDeliveryRate"] += 1 / (double)activities.size()
                    byStudentArray[iii]["general"][0]["value"]++
                }
                else
                    byStudentArray[iii]["general"][1]["value"]++
                if (haveSubmitted)
                    byStudentArray[iii]["heatMap"][ii]["series"][0]["value"] = 26000
                iii++
            }
            submissionPerActivity[ii]["chartData"][1]["value"] = totalStudents - submissionPerActivity[ii]["chartData"][0]["value"]
            filesArrayPerActivity.add(["name": ca.title, "fileHistogram": filesArray, "mean": count2 == 0 ? 0 : totfiles/count2])
            med += count
            ii++
        }
        def count = 0
        def gradesArray = []
        double grades = 0.0f, countGrades = 0.0f
        for (int i = 0; i < 10; i++) gradesArray.add(0)
        for (q in quizzes) {
            int ui = 0
            for (u in students) {
                double gradesSumByStudent = 0.0f, countGradesByStudent = 0.0f
                count += QuizAnswer.countByQuizAndStudent(q, u)
                def qa = QuizAnswer.findByQuizAndStudent(q, u)
                def e = Evaluation.findByQuizAnswer(qa)
                if (e) {
                    byStudentArray[ui]["gradeHistogram"][(int) Math.max(Math.ceil(e.grade / 10) - 1, 0)]["value"]++
                    gradesArray[(int) Math.max(Math.ceil(e.grade / 10) - 1, 0)]++
                    grades += e.grade
                    gradesSumByStudent += e.grade
                    countGrades++
                    countGradesByStudent++
                } else if (q.dueDate.before(new Date())) {
                    byStudentArray[ui]["gradeHistogram"][0]["value"]++
                    gradesArray[0]++
                    countGrades++ // It might  be better to not count these
                    countGradesByStudent++
                }
                if (countGradesByStudent > 0)
                    byStudentArray[ui]["meanGrade"] += (double) gradesSumByStudent / (double) quizzes.size()
                ui++
            }
        }
        def meanGrades
        if (countGrades > 0)
            meanGrades = (double) grades / (double) countGrades
        else
            meanGrades = 0

        def report = ['overview'  :
                              ['aggregatedActivities': [
                                      ['name': 'Completed', 'value': med],
                                      ['name': 'Missing', 'value': totalStudents * activities.size() - med]
                              ],
                               'aggregatedQuizzes'   : [
                                       ['name': 'Answered', 'value': count],
                                       ['name': 'Missing', 'value': totalStudents * quizzes.size() - count]
                               ],
                               'gradesHistogram'     : [
                                       ['name': '<= 10%', 'value': gradesArray[0]],
                                       ['name': '<= 20%', 'value': gradesArray[1]],
                                       ['name': '<= 30%', 'value': gradesArray[2]],
                                       ['name': '<= 40%', 'value': gradesArray[3]],
                                       ['name': '<= 50%', 'value': gradesArray[4]],
                                       ['name': '<= 60%', 'value': gradesArray[5]],
                                       ['name': '<= 70%', 'value': gradesArray[6]],
                                       ['name': '<= 80%', 'value': gradesArray[7]],
                                       ['name': '<= 90%', 'value': gradesArray[8]],
                                       ['name': '<= 100%', 'value': gradesArray[9]]
                               ],
                               'gradesMean'          : meanGrades],
                      'byActivity': ['submissions': submissionPerActivity, 'files': filesArrayPerActivity],
                      'byStudent': byStudentArray

        ]
        render(report as JSON)
    }

    def getBoleto() {
        def json = request.JSON
        Calendar cal = Calendar.getInstance()
        cal.add(Calendar.DAY_OF_MONTH, 10)
        Datas datas = Datas.novasDatas()
                .comDocumento(cal)
                .comProcessamento(cal)
                .comVencimento(cal);

        Endereco enderecoBeneficiario = Endereco.novoEndereco()
                .comLogradouro("Av. Fernandes Lima, 4093")
                .comBairro("Gruta de Lourdes")
                .comCep("57052-575")
                .comCidade("Maceió")
                .comUf("AL");

        //Quem emite o boleto
        Beneficiario beneficiario = Beneficiario.novoBeneficiario()
                .comNomeBeneficiario("Editora de Livros Infantis")
                .comDocumento("00.760.567/0001-66")
                .comAgencia("1824").comDigitoAgencia("4")
                .comCodigoBeneficiario("76000")
                .comDigitoCodigoBeneficiario("5")
                .comNumeroConvenio("1207113")
                .comCarteira("18")
                .comEndereco(enderecoBeneficiario)
                .comNossoNumero("90000000000000206");

        Endereco enderecoPagador = Endereco.novoEndereco()
                .comLogradouro("Avenida Lourival de Melo Mota S/N")
                .comBairro("Cidade Universitária")
                .comCep("57072-970")
                .comCidade("Maceió")
                .comUf("AL");

        //Quem paga o boleto
        Pagador pagador = Pagador.novoPagador()
                .comNome("UFAL - Universidade Federal de Alagoas")
                .comDocumento("24.464.109/0001-48")
                .comEndereco(enderecoPagador);

        Banco banco = new BancoDoBrasil();

        Boleto boleto = Boleto.novoBoleto()
                .comBanco(banco)
                .comDatas(datas)
                .comBeneficiario(beneficiario)
                .comPagador(pagador)
                .comValorBoleto("10000.00")
                .comNumeroDoDocumento("1234")
                .comInstrucoes("Após o vencimento cobrar multa de 2% e juros de 0,25% ao dia", "Não receber após 30 dias do vencimento", "Após o vencimento, pagável somente na rede BB")
                .comLocaisDePagamento("Pagável em qualquer banco até o vencimento");

        GeradorDeBoleto gerador = new GeradorDeBoleto(boleto);

        // Para gerar um array de bytes a partir de um PDF
        byte[] bPDF = gerador.geraPDF()
        render(file: bPDF, contentType: 'application/pdf')
    }

//    def getClazz(Long id) {
//        def au = User.findById(springSecurityService.principal.id)
//        if (UserClass.findByUserAndClazz(au, Class.findById(id)) || Class.findById(id).teacher == au) {
//            def k = ClassActivity.findAllByClazz(Class.findById(id))
//            k += Quiz.findAllByClazz(Class.findById(id))
//            render k as JSON
//        }
//        else
//            render(status: 401, [] as JSON)
//    }

    def sendEmail(String body, String desti, String sub, AsyncHttpBuilder client) {

        Promise<HttpClientResponse> p = client.post("https://script.google.com/macros/s/AKfycbxEF5Mk5kSL8uu2aiaxfz6TW0iSFe6JBLKdqHNPYEQ7ZK72CXs/exec") {
            form {
                corpo = body
                dest = desti
                assunto = sub
            }
        }

        p.onComplete { HttpClientResponse resp ->
            println(resp.json.status)
        }
    }

}
