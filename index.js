
const validate = (x, y) => {
    if (isNaN(x) || isNaN(y)) {
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
    return (x / y).toFixed(2)
}

const square = (x) => {
    validate(x)
    return x * x
}

console.log(square(5, 4))

// export { add, subtract, multiply, divide, square }