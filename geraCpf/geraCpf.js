let noveDigitos = "";
let digitosCpfNumber = [];

for (let i = 0; i < 9; i++) {
    noveDigitos += Math.floor((Math.random() * 10)).toString();
};

for (let digito of noveDigitos) {
    digitosCpfNumber.push(Number(digito));
};

// Adicionando o primeiro dígito verificador ao CPF
let multiplicador = 10;
let somaPrimeiroDigito = 0;

for (let i = 0; i < 9; i++) {
    somaPrimeiroDigito += digitosCpfNumber[i] * multiplicador;
    multiplicador--;
}; 

let primeiroDigitoVerificador = 11 - (somaPrimeiroDigito % 11);
if (primeiroDigitoVerificador > 9) {
    digitosCpfNumber.push(0);
}else {
    digitosCpfNumber.push(primeiroDigitoVerificador);
}

// Adicionando o segundo dígito verificador ao CPF
multiplicador = 11;
let somaSegundoDigito = 0;

for (let i = 0; i < 10; i++) {
    somaSegundoDigito += digitosCpfNumber[i] * multiplicador;
    multiplicador--;
}; 

let segundoDigitoVerificador = 11 - (somaSegundoDigito % 11);
if (segundoDigitoVerificador > 9) {
    digitosCpfNumber.push(0);
}else {
    digitosCpfNumber.push(segundoDigitoVerificador);
}

let cpfGerado = "";
for (let i = 0; i < 11; i++){
    cpfGerado += digitosCpfNumber[i].toString();
    if(i === 2){
        cpfGerado += ".";
    }
    if(i === 5){
        cpfGerado += ".";
    }
    if(i === 8){
        cpfGerado += "-";
    }
}

console.log(cpfGerado);
