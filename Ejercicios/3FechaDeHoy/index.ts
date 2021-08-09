const fecha = new Date();
let año: number = fecha.getFullYear();
let mes: number = fecha.getMonth() +1;
let dia: number = fecha.getDate();
let fechaTotal: string = fecha.toLocaleDateString();

class Fecha{
    private _dia: number;
    private _mes: number;
    private _año: number;

    constructor(dia: number, mes: number, año: number){
        this._dia = dia;
        this._mes = mes;
        this._año = año;
    }

    verificarFecha(){
        if(this._dia === dia && this._mes === mes && this._año === año){
            console.log('Fecha Correcta');
            return true;
        }else{
            console.log('Fecha Incorrecta');
            return false;
        }
    }

    diaSiguiente(){
        if(this.verificarFecha() == true){
            let nuevo: number ;
            let nuevo1: number
            if(this._dia == 31 && this._mes == 12){ 
                nuevo1 = this._año + 1;
                console.log(`mañana será dia:1 mes:1 año:${nuevo1}`);
            }else if(this._dia < 31 && this._mes == 1 ||
                this._dia < 31  && this._mes == 3 ||
                this._dia < 31  && this._mes == 5 ||
                this._dia < 31  && this._mes == 7 || 
                this._dia < 31  && this._mes == 8 ||
                this._dia < 31  && this._mes == 10 ||
                this._dia < 31  && this._mes == 12  
                ){
                nuevo = this._dia + 1;
                console.log(`mañana será dia:${nuevo} mes:${this._mes} año:${this._año}`);
            }else{
                this._dia = 1;
                nuevo = this._mes + 1;
                console.log(`mañana será dia:${this._dia} mes:${nuevo} año:${this._año}`);
            }
        }else{console.log('Corrija la fecha')};
    }

    get dia(){return this._dia}
    get mes(){return this._mes}
    get año(){return this._año}

}

let fechaHoy = new Fecha(30,7,2021);
fechaHoy.diaSiguiente();

// let diasMes: number = new Date(this._año, this._mes, 0).getDate();