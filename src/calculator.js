exports.add = function (firstNumber, secondNumber) {
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        return "Error, both input must be number";
    } else {
        return firstNumber + secondNumber;
    }
};

exports.substract = function (firstNumber, secondNumber) {
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        return "Error, both input must be number";
    } else {
        return firstNumber - secondNumber;
    }
};

exports.multiply = function (firstNumber, secondNumber) {
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        return "Error, both input must be number";
    } else {
        return firstNumber * secondNumber;
    }
};

exports.divide = function (firstNumber, secondNumber) {
    if (isNaN(firstNumber) || isNaN(secondNumber)) {
        return "Error, both input must be number";
    } else if (secondNumber === 0) {
        return "Error, division by zero"
    } else {
        return firstNumber / secondNumber;
    }
};

exports.square = function (number) {
    if (isNaN(number)) {
        return "Error, input must be number";
    } else {
        return number * number;
    }
};

exports.squareRoot = function (number) {
  return "TODO"
};