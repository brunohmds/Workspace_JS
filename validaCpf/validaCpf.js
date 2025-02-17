let cpfUsuario = prompt("Digite o seu CPF: ");
let cpfLimpo = "";
let digitosCpfNumber = [];

// Removendo caracteres não numéricos (. e -)
for (let digito of cpfUsuario) {
    if ("0123456789".includes(digito)) {
        cpfLimpo += digito;
    }
}

// Verificando se o CPF limpo (só números) possui 11 caracteres
while (cpfLimpo.length !== 11) {
    cpfUsuario = prompt("CPF inválido. Digite novamente:");
    cpfLimpo = "";
    for (let digito of cpfUsuario) {
        if ("0123456789".includes(digito)) {
            cpfLimpo += digito;
        }
    }
}

// Convertendo os caracteres para números
for (let digitoLimpo of cpfLimpo) {
    digitosCpfNumber.push(Number(digitoLimpo));
}

// Verifica CPF com número repetido (sequência de números iguais)
let sequencia = true;
const primeiroDigitoCpf = digitosCpfNumber[0];
for (let digito of digitosCpfNumber) {
    if (digito !== primeiroDigitoCpf) {
        sequencia = false;
    }
}

// Testando o primeiro dígito verificador
let multiplicador = 10;
let somaPrimeiroDigito = 0;

for (let i = 0; i < 9; i++) {
    somaPrimeiroDigito += digitosCpfNumber[i] * multiplicador;
    multiplicador--;
}

let primeiroDigitoVerificador = 11 - (somaPrimeiroDigito % 11);
if (primeiroDigitoVerificador > 9) {
    primeiroDigitoVerificador = 0;
}

// Testando o segundo dígito verificador
multiplicador = 11;
let somaSegundoDigito = 0;

for (let i = 0; i < 10; i++) {
    somaSegundoDigito += digitosCpfNumber[i] * multiplicador;
    multiplicador--;
}

let segundoDigitoVerificador = 11 - (somaSegundoDigito % 11);
if (segundoDigitoVerificador > 9) {
    segundoDigitoVerificador = 0;
}

// Validando o CPF
let primeiroDigitoOk = primeiroDigitoVerificador === digitosCpfNumber[9];
let segundoDigitoOk = segundoDigitoVerificador === digitosCpfNumber[10];

if (primeiroDigitoOk && segundoDigitoOk && !sequencia) {
    console.log("CPF válido");
} else {
    console.log("CPF inválido");
}
