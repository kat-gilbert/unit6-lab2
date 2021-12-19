import HTMLGreeter from "../src/htmlgreeter";

describe("HTMLGreeter", function() {
    test("HTML Say hello to Kat", function() {
    let newGreeting: HTMLGreeter =  new HTMLGreeter("Hello", "h2");
    expect(newGreeting.greet("Kat")).toBe("<h2>Hello, Kat</h2>!");
    });

    test("HTML Say whats up to Kat", function() {
    let newGreeting: HTMLGreeter =  new HTMLGreeter("What's Up");
    expect(newGreeting.greet("Kat")).toBe("<h1>What's Up, Kat</h1>!");
    });
});