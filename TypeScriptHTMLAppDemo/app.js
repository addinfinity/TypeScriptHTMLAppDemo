var Greeter = (function () {
    function Greeter(element) {
        var _this = this;
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');
        this.stopButton = document.createElement('button');
        this.stopButton.innerText = "Stop";
        this.stopButton.onclick = function (e) { _this.stop(); };
        this.startButton = document.createElement('button');
        this.startButton.innerText = "Start";
        this.startButton.onclick = function (e) { _this.start(); };
        this.element.appendChild(this.span);
        this.element.appendChild(this.startButton);
        this.element.appendChild(this.stopButton);
        this.span.innerText = new Date().toUTCString();
    }
    Greeter.prototype.start = function () {
        var _this = this;
        this.timerToken = setInterval(function () { return _this.span.innerHTML = new Date().toUTCString(); }, 500);
    };
    Greeter.prototype.stop = function () {
        clearTimeout(this.timerToken);
    };
    return Greeter;
}());
window.onload = function () {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    //greeter.start();
};
//# sourceMappingURL=app.js.map