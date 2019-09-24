var Greeter = (function () {
    function Greeter(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Greeter.prototype.showGreeting = function () {
        var row2 = document.getElementById('r1c2');
        row2.innerHTML = 'Hello ' + this.firstName + ' ' + this.lastName + '.';
    };
    Greeter.prototype.resetGreeting = function () {
        var row2 = document.getElementById('r1c2');
        row2.innerHTML = 'r1c2';
    };
    Greeter.prototype.showGreeting2 = function () {
        var row3 = document.getElementById('r2c2');
        row3.innerHTML = 'Mow Mow ' + 'Num Num ' + '.';
    };
    Greeter.prototype.resetGreeting2 = function () {
        var row3 = document.getElementById('r2c2');
        row3.innerHTML = 'r2c2';
    };
    return Greeter;
})();
// window.onload = () => {
var greeter = new Greeter('Oscar', 'Vasquez');
//}
