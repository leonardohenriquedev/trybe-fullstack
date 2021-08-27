var peso = 90;
var altura = 190;

function calculaIMC(peso, altura) {
    var imc = (peso / (altura * 2) * 100);
    imc = imc.toFixed(1)
    var resultado = '';

    if (imc < 18.5) {
        resultado = 'Magreza';
    } else if (imc < 24.9) {
        resultado = 'Normal';
    } else if (imc < 30) {
        resultado = 'Sobrepeso';
    } else if (imc > 30) {
        resultado = 'Obesidade';
    }

    return 'Seu IMC é: ' + imc + '\nResultado: ' + resultado;
}

console.log(calculaIMC(peso, altura));