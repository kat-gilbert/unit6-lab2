
class Greeter {
    greeting: string;

    constructor(greeting:string) {
        this.greeting = greeting;
    }
    
    greet(name:string) {
    return `${this.greeting}, ${name}!`;
    }
}

let newGreeting: Greeter =  new Greeter("Hello");
console.log(newGreeting.greet("Kat"));

export default Greeter;