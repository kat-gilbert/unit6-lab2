import LoudGreeter from "../src/loudgreeter";

describe("LoudGreeter", function() {
    test("Say hello to Kat", function() {
    let newGreeting: LoudGreeter =  new LoudGreeter("Hello");
    expect(newGreeting.greet("Kat")).toBe("Hello, Kat!!");
    });

    test("Say hello to Kat", function() {
    let newGreeting: LoudGreeter =  new LoudGreeter("What's Up");
    newGreeting.addVolume();
    newGreeting.addVolume();
    expect(newGreeting.greet("Kat")).toBe("What's Up, Kat!!!!");
    });
});