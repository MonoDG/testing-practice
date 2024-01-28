import { capitalize, reverse } from "./index";

it("Should capitalize string", () => {
    expect(capitalize("hello world")).toBe("Hello world");
    expect(capitalize("fizz")).toBe("Fizz");
});

it("Should reverse string", () => {
    expect(reverse("hello")).toBe("olleh");
    expect(reverse("fizz buzz")).toBe("zzub zzif");
});
