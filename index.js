function capitalize(string) {
    return string[0].toUpperCase() + string.slice(1);
}

function reverse(string) {
    let reversedString = [];
    for (let i = 0; i < string.length; i++) {
        reversedString.push(string[string.length - 1 - i]);
    }
    return reversedString.join("");
}

const calculator = {
    add: (n1, n2) => n1 + n2,
    substract: (n1, n2) => n1 - n2,
    divide: (n1, n2) => n1 / n2,
    multiply: (n1, n2) => n1 * n2,
};

export { capitalize, reverse, calculator };
