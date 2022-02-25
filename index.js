
const validate = (x, y) => {
    if (x.isNaN() || y.isNaN()) {
        return "Error"
    }
}

const add = (x, y) => {
    validate(x, y)
    return x + y
}

const subtract = (x, y) => {
    validate(x, y)
    return x - y
}

const multiply = (x, y) => {
    validate(x, y)
    return x * y
}

const divide = (x, y) => {
    validate(x, y)
    if (y === 0) return "Error"
    return x / y
}

const square = (x) => {
    validate(x)
    return x * x
}

export { add, subtract, multiply, divide, square }