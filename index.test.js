import capitalize from "./index";

it("Should capitalize string", () => {
    expect(capitalize("hello world")).toBe("Hello world");
    expect(capitalize("fizz")).toBe("Fizz");
});
