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

export { capitalize, reverse };
