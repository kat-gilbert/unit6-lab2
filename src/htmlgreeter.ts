import Greeter from "./greeter";

class HTMLGreeter extends Greeter {
    tagName: string;

    constructor(greeting: string, tagName: string= "h1") {
        super(greeting);
        this.tagName = tagName;
    }

    greet(name:string) {

    return `<${this.tagName}>${this.greeting}, ${name}</${this.tagName}>!`;
    }
}

let newGreeting: HTMLGreeter = new HTMLGreeter("What's Up", "h2");

console.log(newGreeting.greet("Kat"))

export default HTMLGreeter;