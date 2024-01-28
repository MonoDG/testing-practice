import { capitalize, reverse, calculator } from "./index";

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
