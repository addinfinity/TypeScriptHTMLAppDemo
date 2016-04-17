class Greeter {
    element: HTMLElement;
    span: HTMLElement;
    stopButton: HTMLButtonElement;
    startButton: HTMLButtonElement;
    timerToken: number;

    constructor(element: HTMLElement) {
        this.element = element;
        this.element.innerHTML += "The time is: ";
        this.span = document.createElement('span');

        this.stopButton = document.createElement('button');
        this.stopButton.innerText = "Stop";
        this.stopButton.onclick = (e) => { this.stop(); };
        
        this.startButton= document.createElement('button');
        this.startButton.innerText = "Start";
        this.startButton.onclick = (e) => { this.start(); };

        this.element.appendChild(this.span);
        this.element.appendChild(this.startButton);
        this.element.appendChild(this.stopButton);
        
        this.span.innerText = new Date().toUTCString();
    }

    start() {
        this.timerToken = setInterval(() => this.span.innerHTML = new Date().toUTCString(), 500);
    }

    stop() {
        clearTimeout(this.timerToken);
    }

}

window.onload = () => {
    var el = document.getElementById('content');
    var greeter = new Greeter(el);
    //greeter.start();
};