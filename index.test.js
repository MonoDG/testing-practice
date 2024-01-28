import {
    capitalize,
    reverse,
    calculator,
    caesarCipher,
    analyzeArray,
} from "./index";

it("Should capitalize string", () => {
    expect(capitalize("hello world")).toBe("Hello world");
    expect(capitalize("fizz")).toBe("Fizz");
});

it("Should reverse string", () => {
    expect(reverse("hello")).toBe("olleh");
    expect(reverse("fizz buzz")).toBe("zzub zzif");
});

it("Should add 1 + 2 and be equal to 3", () => {
    expect(calculator.add(1, 2)).toBe(3);
});

it("Should substract 3 - 2 and be equal to 1", () => {
    expect(calculator.substract(3, 2)).toBe(1);
});

it("Should divide 10 / 2 and be equal to 5", () => {
    expect(calculator.divide(10, 2)).toBe(5);
});

it("Should add 2 * 4 and be equal to 8", () => {
    expect(calculator.multiply(2, 4)).toBe(8);
});

it("Should return correct encrypted message", () => {
    expect(caesarCipher("hello world", 5)).toBe("mjqqta.twqi");
    expect(caesarCipher("abcde", 8)).toBe("ijklm");
    expect(caesarCipher("FIZZ BUZZ", 10)).toBe("PSEEfL!EE");
    expect(caesarCipher("the odin project? No way!, I love it.", 10)).toBe(
        "?rofynsxfz.ytom?ifXyfbkdjhfSfvyaofs?g"
    );
});

it("Should return object with expected properties", () => {
    const expectedObject = {
        average: 4,
        min: 1,
        max: 8,
        length: 6,
    };
    expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual(expectedObject);
});
