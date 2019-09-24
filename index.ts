

class Greeter {

    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    showGreeting() {
        const row2 = document.getElementById('r1c2');
        row2.innerHTML = 'Hello ' + this.firstName + ' ' + this.lastName + '.'
    }

resetGreeting () {
    const row2 = document.getElementById('r1c2');
    row2.innerHTML = 'r1c2'  
}
    showGreeting2() {
        const row3 = document.getElementById('r2c2');
        row3.innerHTML = 'Mow Mow ' + 'Num Num ' + '.'
    }

resetGreeting2 () {
    const row3 = document.getElementById('r2c2');
    row3.innerHTML = 'r2c2'

}
}

// window.onload = () => {
const greeter = new Greeter('Oscar', 'Vasquez');
//}
