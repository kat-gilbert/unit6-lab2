import Greeter from "../src/greeter";

describe("Greeter", function() {
    test("Say hello to Kat", function() {
    let newGreeting: Greeter =  new Greeter("Hello");
    expect(newGreeting.greet("Kat")).toBe("Hello, Kat!");
    });

    test("Say hello to Kat", function() {
    let newGreeting: Greeter =  new Greeter("What's Up");
    expect(newGreeting.greet("Kat")).toBe("What's Up, Kat!");
    });
});



