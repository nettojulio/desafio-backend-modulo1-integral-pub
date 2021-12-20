function capslock(input) {

    if (input === input.toUpperCase()) {
        console.log(input.toLowerCase())
    } else if (input[0] === input[0].toLowerCase() && input.substr(1) === input.substr(1).toUpperCase()) {
        x = input[0].toUpperCase() + input.slice(1, input.length).toLowerCase()
        console.log(x)
    } else {
        console.log(input)
    }

}

capslock("cAPS");