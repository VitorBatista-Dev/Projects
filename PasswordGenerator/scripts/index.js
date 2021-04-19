function CheckOptions(options) {

    if (options.numbers == false && options.lowerCase == false && options.upperCase == false) {
        return false
    }

    return true
}