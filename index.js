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

function caesarCipher(string, shiftFactor) {
    const alphabet = " .,?!abcdefghijklmnopqrstuvwxyz";
    const encryptedArr = [];
    for (let character of string) {
        encryptedArr.push(shiftCharacter(alphabet, character, shiftFactor));
    }
    return encryptedArr.join("");
}

function shiftCharacter(alphabet, letter, shiftFactor) {
    let newIndex = null;
    if (letter.match(/[a-zA-z]/) && letter === letter.toUpperCase()) {
        newIndex =
            (alphabet.indexOf(letter.toLowerCase()) + shiftFactor) %
            alphabet.length;
        return alphabet[newIndex].toUpperCase();
    } else {
        newIndex = (alphabet.indexOf(letter) + shiftFactor) % alphabet.length;
        return alphabet[newIndex];
    }
}

export { capitalize, reverse, calculator, caesarCipher };
