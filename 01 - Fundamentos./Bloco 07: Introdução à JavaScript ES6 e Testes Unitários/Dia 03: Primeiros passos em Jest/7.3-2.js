// Desafio 1
function compareTrue(a, b) {
  if ((a === true) && (b === true)) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, heigth) {
  let result = 0;
  result = ((base * heigth) / 2);
  return result;
}

// Desafio 3
function splitSentence(string) {
  let split = [];
  split = string.split(' ');
  return split;
}

// Desafio 4
function concatName(string) {
  let firstAndLast = [];
  firstAndLast += (string[string.length - 1]) + ',';
  firstAndLast += ' ' + (string[0]);
  return firstAndLast;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winPoints = wins * 3;
  let tiePoints = ties * 1;
  return winPoints + tiePoints;
}

// Desafio 6
function highestCount(array) {
  let guardaMaior = -Infinity;
  let quantVezes = 0;

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > guardaMaior) {
      guardaMaior = array[index];
    }
  }

  for (let index = 0; index < array.length; index += 1) {
    if (guardaMaior === array[index]) {
      quantVezes += 1;
    }
  }
  return quantVezes;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = 0;
  let distanceCat2 = 0;

  distanceCat1 = Math.abs(cat1 - mouse);
  distanceCat2 = Math.abs(cat2 - mouse);

  if (distanceCat1 < distanceCat2) {
    return 'cat1';
  }

  if (distanceCat2 < distanceCat1) {
    return 'cat2';
  }

  if (distanceCat1 === distanceCat2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
  let concat = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      concat.push('fizzBuzz')
    } else if (array[index] % 3 === 0) {
      concat.push('fizz')
    } else if (array[index] % 5 === 0) {
      concat.push('buzz')
    } else concat.push('bug!')
  }
  return concat;
}

// Desafio 9
function encode(string) {
  let changed = [];
  changed = string.split('');

  for (let index = 0; index < string.length; index += 1) {
    if (changed[index] === 'a') {
      changed[index] = '1';
    } else if (changed[index] === 'e') {
      changed[index] = '2';
    } else if (changed[index] === 'i') {
      changed[index] = '3';
    } else if (changed[index] === 'o') {
      changed[index] = '4';
    } else if (changed[index] === 'u') {
      changed[index] = '5';
    }
  }

  changed = changed.join('');

  return changed;
}

function decode(string) {
  let decodificado = [];
  decodificado = string.split('');

  for (let index = 0; index < string.length; index += 1) {
    if (decodificado[index] === '1') {
      decodificado[index] = 'a';
    } else if (decodificado[index] === '2') {
      decodificado[index] = 'e';
    } else if (decodificado[index] === '3') {
      decodificado[index] = 'i';
    } else if (decodificado[index] === '4') {
      decodificado[index] = 'o';
    } else if (decodificado[index] === '5') {
      decodificado[index] = 'u';
    }
  }

  decodificado = decodificado.join('');

  return decodificado;
}

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
  encode,
  decode,
  techList,
  hydrate,
};
