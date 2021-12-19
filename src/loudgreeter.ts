import Greeter from "../src/greeter";

class LoudGreeter extends Greeter {
    private extra: string = "!";

    greet(name:string) {
        return `${this.greeting}, ${name}!${this.extra}`;
    }

    addVolume():void {
        this.extra += "!";
    }
}

let newGreeter: LoudGreeter = new LoudGreeter("How goes it");

console.log(newGreeter.greet("Kat"));
newGreeter.addVolume();
console.log(newGreeter.greet("Kat"));
newGreeter.addVolume();
console.log(newGreeter.greet("Kat"));
newGreeter.addVolume();
newGreeter.addVolume();
console.log(newGreeter.greet("Kat"));

export default LoudGreeter;