import Greeter from "./greeter";

class JavascriptGreeter extends Greeter {

        greet(name:string) {

        return `console.log('${this.greeting}, ${name}!')`;
    }
}

let newGreeting: Greeter = new JavascriptGreeter("What's Up");

console.log(newGreeting.greet("Kat"))

export default JavascriptGreeter;