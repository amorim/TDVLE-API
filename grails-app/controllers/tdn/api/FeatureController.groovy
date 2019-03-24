package tdn.api

import grails.converters.JSON

class FeatureController {

    def index() {
        render JSON.parse(Features.findAll()[0].featuresJson) as JSON
    }

    def updateFeatures() {
        def json = request.JSON
        Features features = Features.findAll()[0]
        features.featuresJson = json.toString()
        features.save(flush: true, failOnError: true)
        render(status: 201, json as JSON)
    }
}
