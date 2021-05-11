function CheckOptions(options) {

    if (options.numbers == false && options.lowerCase == false && options.upperCase == false) {
        return false
    }

    return true
}

function ReturnOptionsTags() {

    return {
        size: document.getElementById('size').value,
        numbers: document.getElementById('numbers').checked,
        lowerCase: document.getElementById('lower-case').checked,
        upperCase: document.getElementById('upper-case').checked,
        symbols: document.getElementById('symbols').checked
    }
}

function ExecuteGenerationOfPassword() {

    let options = ReturnOptionsTags()

    if (CheckOptions(options)) {

        let password = GeneratePassword(options)
        document.getElementById('input-result').value = password
        
    } else {
        window.alert("Select a Option")
    }
}