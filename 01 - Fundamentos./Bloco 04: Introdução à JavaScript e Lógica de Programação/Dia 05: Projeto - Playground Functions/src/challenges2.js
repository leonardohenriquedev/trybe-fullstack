// Desafio 10
function techList(array, name) {
  array.sort();
  let newList = [];
  if (array.length > 0) {
    for (let key in array) {
      newList.push({ tech: array[key], name: name });
    }
  } else return 'Vazio!';

  return newList;
}

// Desafio 11
function generatePhoneNumber(array) {
  let phoneNumber = '';
  let ddd = '';
  let first = '';
  let second = '';

  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  for (let index = 0; index < array.length; index += 1) {
    let contador = 0;
    for (let b = 0; b < array.length; b += 1) {
      if (array[index] === array[b]) {
        contador += 1;
      }
    }
    if (array[index] < 0 || array[index] > 9 || contador >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';

    } else phoneNumber += array[index];
  }

  for (let index = 0; index < 2; index += 1) {
    ddd += phoneNumber[index];
  }

  for (let index = 2; index < 7; index += 1) {
    first += phoneNumber[index];
  }

  for (let index = 7; index < 11; index += 1) {
    second += phoneNumber[index];
  }

  return '(' + ddd + ')' + ' ' + first + '-' + second;

}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {

  if (lineA > (lineB + lineC) || lineB > (lineA + lineC) || lineC > (lineA + lineB)) {
    return false;
  } else if (lineA < Math.abs(lineB - lineC) || lineB < Math.abs(lineA - lineC) || lineC < Math.abs(lineA - lineB)) {
    return false
  } else return true;
}

// Desafio 13
function hydrate(string) {
  let separado = string.split('');
  let waterCup = 0;

  for (let index = 0; index < separado.length; index += 1) {
    if (separado[index] > 0) {
      waterCup += parseInt(separado[index]);
    }
  }

  if (waterCup <= 1) {
    return waterCup + ' ' + 'copo de água';
  } else return waterCup + ' ' + 'copos de água';
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};