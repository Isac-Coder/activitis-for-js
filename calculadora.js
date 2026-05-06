
let a = parseFloat(prompt("numero 1"))
let b = parseFloat(prompt("numero 2"))


let operacion = prompt("Operacion (+, -, *, /: )")

let resultado;

    if (operacion === "+"){
        resultado = a + b;
        console.log(`Resultado: ${resultado}`);
    } else if(operacion === "-"){
        resultado = a - b;
            console.log(`Resultado: ${resultado}`);
    } else if(operacion === "*"){
        resultado = a * b;
            console.log(`Resultado: ${resultado}`);
    } else if(operacion === "/"){
        if (b === 0){
            console.log("Error: no se puede dividir entre cero")
        process.exit();
        }
        resultado = a / b;
            console.log(`Resultado: ${resultado}`);
    } else{
        console.log("Operacion no valida");
    }