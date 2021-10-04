// let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


// for(var primeiroIndice = 1; primeiroIndice<numbers.length; primeiroIndice+=1){
//     for(var segundoIndice = 0; segundoIndice<primeiroIndice; segundoIndice+=1){
//         if(numbers[primeiroIndice]<numbers[segundoIndice]){
//             var guarda = numbers[segundoIndice];
//             numbers[segundoIndice] = numbers[primeiroIndice];
//             numbers[primeiroIndice] = guarda;
//         }
//     }

// }

// for(var primeiroIndice = 1; primeiroIndice<numbers.length; primeiroIndice+=1){
//     for(var segundoIndice = 0; segundoIndice<primeiroIndice; segundoIndice+=1){
//         if(numbers[primeiroIndice]>numbers[segundoIndice]){
//             var guarda = numbers[segundoIndice];
//             numbers[segundoIndice] = numbers[primeiroIndice];
//             numbers[primeiroIndice] = guarda;
//         }
//     }

// }

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
var multiplicado = [];
var contador = 1;

for (var index = 0; index < numbers.length; index += 1) {
    if (numbers[contador] != undefined) {
        multiplicado.push((numbers[index] * numbers[contador]));
        contador++
    } else multiplicado.push((numbers[index] * 2));
}

console.log(multiplicado)