class celular {

    constructor(){

        this.cor = "black";
    }

    ligar(){

        console.log("uma ligação");
        return "ligando...";
    }
}

let objeto = new celular();

console.log(objeto.ligar());