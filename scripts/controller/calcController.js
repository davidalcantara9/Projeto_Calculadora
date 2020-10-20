class calcController {

    constructor(){

        this.lastOperator = '';
        this.lastOperator = '';
        this._operation = [];
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

        this.SetLastNumberToDisplay();
    }

    addEventListenerAll(element, events, fn){

        events.split(' ').forEach(event => {

            element.addEventListener(event, fn, false);

        });

    }

    

    clearAll(){
        this._operation = [];

        this.SetLastNumberToDisplay();
    }

    clearEntry(){

        this._operation.pop();

        this.SetLastNumberToDisplay();
    }
    getLastOperation(){

        return this._operation[this._operation.length- 1];

    }

    setLastOperation(value){

        this._operation[this._operation.length - 1] = value;

    }

    isOperator(value) {
        //verificação do sinal operadorador dentro do metodo addOperation
        return (['+', '-', '*', '/', '%'].indexOf(value) > -1);

    }

    pushOperator(value){

        this._operation.push(value);

        if (this._operation.length > 3){

            
            this.calc();

            console.log(this._operation);
        }
    }

    getResult(){


            return eval(this._operation.join(""));



    }
    calc(){
        let last = '';

        if(this._operation.length > 3 ){
             last = this._operation.pop();

            this._lastNumber = this.getResult();
        }


        let result = this.getResult();

        if (last == '%' ){

              result =  result / 100;

              this._operation = [result];

        }else{

            this._operation = [result];
            if (last)this._operation.push(last);


        } 
        

        

        this.SetLastNumberToDisplay();

    }

    calcIgual(){


        let igual = console.log(this._thisoperation);

        console.log(calculator.displayCalc)




    }
    getLastItem(isOperator = true){

        let lastItem;

        for (let i =  this._operation.length - 1; i >= 0; i--){

            if (isOperator){

            
                if (this.isOperator(this._operation[i])){
                lastItem = this._operation[i];
                break;

 
                }
            }else {

                if (!this.isOperator(this._operation[i])){
                    lastItem = this._operation[i];
                    break;
                }
            }
        }
        return lastItem;
        

    }

    SetLastNumberToDisplay(){

        let lastNumber;

        for (let i =  this._operation.length - 1; i >= 0; i--){

            if (!this.isOperator(this._operation[i])){
                lastNumber = this._operation[i];
                break;

 
            }

        }

        if (!lastNumber) lastNumber = 0;
        this.displayCalc = lastNumber;
        
    }

    addOperation(value){

        if (isNaN(this.getLastOperation())) {                

            if (this.isOperator(value)) {
                    //trocar o operadorador da calculadora
                this.setLastOperation(value);

            } else if(isNaN(value)) {

                //Outra coisa
                console.log(value);

            } else {

                this.pushOperator(value);

                this.SetLastNumberToDisplay();
            }


        } else {

            if (this.isOperator(value)){

 
                this.pushOperator(value);
            }else {
               
                let newValue = this.getLastOperation().toString() + value.toString();
                this.setLastOperation(parseInt(newValue));

                this.SetLastNumberToDisplay();
            }
            
        }

        

    }

    setError(){
        this.displayCalc = "Error";

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
                this.addOperation('+');
                break;
            case 'subtracao':
                    this.addOperation('-');
                break;
            case 'divisao':
                    this.addOperation('/');
                break;
            case 'multiplicacao':
                    this.addOperation('*');
                break;
            case 'porcento':
                    this.addOperation('%');
                break;
            case 'igual':
                    this.calc();
                break;
            case 'ponto':
                    this.addOperation('.');
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
                this.setError();
           

        }  

    }
   

    initButtonsEvents(){

        let buttons = document.querySelectorAll("#buttons > g, #parts > g");

        buttons.forEach((btn, index)=>{

            this.addEventListenerAll(btn, "click drag", e => {

                let textBtn = btn.className.baseVal.replace("btn-", "");

                this.execBtn(textBtn);

            });

            this.addEventListenerAll(btn, 'mouseover, mouseup, mousedown', e => {

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