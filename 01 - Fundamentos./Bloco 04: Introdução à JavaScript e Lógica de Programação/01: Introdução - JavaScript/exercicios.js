const a = 10;
const b = 2;
const c = 3;

function adicao(a, b) {
    return a+b;  
}

console.log("Quanto é " + a + "+" + b + "? " + adicao(a,b));

function subtracao(a, b) {
    return a-b;
}

console.log("Quanto é " + a + "-" + b + "? " + subtracao(a,b));

function multiplicacao(a, b) {
    return a*b;
}

console.log("Quanto é " + a + "x" + b + "? " + multiplicacao(a,b));

function divisao(a, b) {
    return a/b;
}

console.log("Quanto é " + a + " dividido por " + b + "? " + divisao(a,b));

function modulo(a, b) {
    return a%b;
}

console.log("Qual é o resto da divisão de " + a + " por " + b + "? " + modulo(a,b));

function retornaMaior(a, b){
    if(a>b){
        return a;
    }
    else return b;
}

console.log("Entre o numero " + a + " e o numero " + b + ' qual é o maior? ' + retornaMaior(a,b));

function maiorDeTres(a, b, c){
    if(a>b&&a>c){
    return a;
    }
    else if(b>a&&b>c){
    return b;
    }
    else return c;
}

console.log("Dados os numeros " + a + ', ' + b + ' e ' + c + ', qual deles é o maior? ' + maiorDeTres(a,b,c));

function positivoOuNegativo(a){
    if(a>0){
        return "Positivo";
    }
    else if (a<0){
        return "Negativo";
    }
    else return "Zero";
}

console.log("O numero " + a + ' é positivo ou negativo? ' + positivoOuNegativo(a));

function triangulos (a, b, c){
    if(a+b+c==180){
        return 'Sim';
    }
    else if (a+b+c!==180){
        return 'Não';
    }
    else if(a<0||b<0||c<0){
        return "Angulo inválido";
    }
}
console.log( a + ', ' + b + ' e ' + c + " São ângulos de um triangulo? " + triangulos(a,b,c));

var peça = 'RAINHA';

switch (peça.toLowerCase()){

    case 'rei':
       console.log('O rei pode mover-se em todas as direções (horizontal, vertical e diagonal) somente uma casa de cada vez.');
    break;

    case 'rainha':
       console.log('A rainha move-se ao longo da horizontal, vertical e diagonais mas não pode pular outras peças.');
    break;

    case 'bispo':
       console.log('O bispo move-se ao longo da diagonal. Não pode pular outras peças.');
    break;

    case 'cavalo':
       console.log('É a única peça que pode pular as outras. O movimento do cavalo é em forma de “L”, quer dizer, duas casas em sentido horizontal e mais uma na vertical ou vice-versa.');
    break;

    case 'torre':
       console.log('A torre movimenta-se pela vertical ou horizontal, mas não pode pular outras peças.');
    break;

    case 'peão':
       console.log('O peão movimenta-se apenas uma casa para frente e somente captura outras peças na diagonal. Opcionalmente, cada peão pode avançar duas casas no seu primeiro movimento do jogo.');
    break;

    default: console.log("Essa peça nao existe");
}

var nota = -5;

if(nota>=90&&nota<=100){
    console.log('A');
}

else if (nota>=80&&nota<90){
    console.log('B');
}

else if (nota>=70&&nota<80){
    console.log('C');
}

else if (nota>=60&&nota<70){
    console.log('D');
}

else if (nota>=50&&nota<60){
    console.log('E');
}

else if (nota>0&&nota<50){
    console.log('F');
}

else 
    console.log('ERRO NA NOTA');

const primeiro = 13;
const segundo = 15;
const terceiro = 2;

if(primeiro%2==0||segundo%2==0||terceiro%2==0){
    console.log('true');
}
else console.log('false');

const first = 2;
const second = 4;
const third = 9;

if(first%2>0||second%2>0||third%2>0){
    console.log('true');
}
else console.log('false');




var custo = 50;
var valorVenda = 159;
var vendas = 1000;


if(custo<0||valorVenda<0||vendas<0){
    console.log('Erro na entrada');
}

else if(vendas >=0){
    var lucro = 0;
    var imposto = 0;
    imposto = (vendas*custo)*0.2;
    lucro = (vendas*valorVenda)-(vendas*custo);
    lucro = lucro-imposto;
    console.log(lucro);
}

var salarioBruto = 3000;
var salarioBase = 0;

if(salarioBruto<=1556.94){
    salarioBase = salarioBruto - (salarioBruto*0.08);
}

else if(salarioBruto>=1556.95&&salarioBruto<=2591.92){
    salarioBase = salarioBruto - (salarioBruto*0.09);
}

else if(salarioBruto>=2594.93&&salarioBruto<=5189.82){
    salarioBase = salarioBruto - (salarioBruto*0.11);
}

else if(salarioBruto>5189.82){
    salarioBase = salarioBruto - 570.88;
}

var salarioLiquido = 0;

if(salarioBase<=1903.98){
    salarioLiquido = salarioBase;
    console.log(salarioLiquido);
}

else if (salarioBase>=1903.99&&salarioBase<=2826.65){
    salarioLiquido = salarioBase - ((salarioBase*0.075)-142.80);
    console.log(salarioLiquido);
}

else if (salarioBase>=2826.66&&salarioBase<=3751.05){
    salarioLiquido = salarioBase - ((salarioBase*0.15)-354.80);
    console.log(salarioLiquido);
}

else if (salarioBase>=3751.06&&salarioBase<=4664.68){
    salarioLiquido = salarioBase - ((salarioBase*0.225)-636.13);
    console.log(salarioLiquido);
}

else if (salarioBase>=4664.68){
    salarioLiquido = salarioBase - ((salarioBase*0.275)-869.36);
    console.log(salarioLiquido);
}

