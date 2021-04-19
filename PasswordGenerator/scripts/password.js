function GeneratePassword(options) {

    let alphabetoLower = "abcdefghijklmnopqrstuvwxyz"
    let alphabetoUpper = alphabetoLower.toUpperCase()
    let numbers = "123456789"
    let symbols = "(){}[];://.,+-*!@#$%&*=_-"

    let password = []

    for (let c = 0;c < options.size; c++) {

        while (true) {

            let ran = Math.floor(Math.random() * 3)

            if (ran == 0 && options.lowerCase) {
                password.push(alphabetoLower[Math.floor(Math.random() * alphabetoLower.length)])
                break

            }

            if (ran == 1 && options.upperCase) {
                password.push(alphabetoUpper[Math.floor(Math.random() * alphabetoUpper.length)])
                break
            }

            if (ran == 2 && options.numbers) {
                password.push(numbers[Math.floor(Math.random() * numbers.length)])
                break
            }

            if (ran == 3 && options.symbols) {
                password.push(symbols[Math.floor(Math.random() * symbols.length)])
                break
            }
        }
    }

    return password.join('')
}