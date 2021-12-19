import JavascriptGreeter from "../src/javascriptgreeter";

describe("JavascriptGreeter", function() {
    test("JS Say hello to Kat", function() {
    let newGreeting: JavascriptGreeter =  new JavascriptGreeter("Hello");
    expect(newGreeting.greet("Kat")).toBe("console.log('Hello, Kat!')");
    });

    test("Say hello to Kat", function() {
    let newGreeting: JavascriptGreeter =  new JavascriptGreeter("What's Up");
    expect(newGreeting.greet("Kat")).toBe("console.log('What's Up, Kat!')");
    });
});