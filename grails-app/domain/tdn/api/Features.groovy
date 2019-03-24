package tdn.api

class Features {

    static constraints = {
    }

    String featuresJson

    static mapping = {
        featuresJson sqlType: "text"
    }
}
