class calcController {

    constructor(){
        this.operation = [];
        this._locate = 'pt-BR'
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        // _ serve para atributo privado.
        this._currentDate;
        this.initialize();
        this.initButtonsEvents();


    }

    initialize (){
        setInterval(()=>{

            this.displayDate = this.currentDate.toLocaleDateString (this._locate);
            this.displayTime = this.currentDate.toLocaleTimeString (this._locate);


        }, 1000);

    }

    addEventListenerAll(element, events, fn){

        events.split(' ').forEach(event => {

            element.addEventListener(event, fn, false);

        });

    }

    clearAll(){
        this._operation = [];
    }

    clearEntry(){

        this._operation.pop();
    }
    getLastOperation(){

        this._operation.push(value);

    }

    addOperation(value){

        this._operation.push(value);

    }

    SetError(){

        this.displayCalc = "Error";
    }

    
    Subtracao(){

       
    }

    execBtn(value){

        switch (value) {

            case 'ac':
                this.clearAll();
                break;
            case 'ce':
                this.clearEntry();
                break;
            case 'soma':
                
                break;
            case 'subtracao':
                this.subtracao();
                break;
            case 'divisao':
                
                break;
            case 'multiplicacao':
                
                break;
            case 'porcento':
                
                break;
            case 'igual':
                
                break;
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.addOperation(parseInt(value));

                break;

            default:
                this.SetError();
            break;

        }


    }
    initButtonsEvents(){

        let buttons = document.querySelectorAll("#buttons > g, #parts > g");

        buttons.forEach((btn, index)=>{

            this.addEventListenerAll(btn, "click drag", e => {

                let textBtn = (btn.className.baseVal.replace("btn-",""));

                this.execBtn();

            });

            this.addEventListenerAll(btn, "mouseover, mouseup, mousedown", e => {

                btn.style.cursor = 'pointer';
            });



        });



    }

 

    get displayTime (){
        return this._timeEl.innerHTML;


    }

    set displayTime (value){
        return this._timeEl.innerHTML = value;


    }
    get displayDate(){

        return this._dateEl.innerHTML;


    }

    set displayDate (value){
        return this._dateEl.innerHTML = value;


    }
    get displayCalc(){

        return this._displayCalcEl.innerHTML;

    }

    set displayCalc(value){
        this._displayCalcEl.innerHTML = value;

    }

    get currentDate(){

        return new Date ();

    }

    set currentDate(value){
        this._currentDate = value;


    }
}