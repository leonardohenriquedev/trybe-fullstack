const newEmployees = (fullName, func) => {
  const employees = {
    id1: '', // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: '', // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: '', // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }

  const newEmployee = func(fullName);
  if (newEmployee.nomeCompleto === 'Pedro Guerra') {
    employees.id1 = newEmployee;
  } else if (newEmployee.nomeCompleto === 'Luiza Drumond') {
    employees.id2 = newEmployee;
  } else if (newEmployee.nomeCompleto === 'Carla Paiva') {
    employees.id3 = newEmployee;
  }

  return employees;
};

const newEmployee = (fullName) => {
  const mail = fullName.replace(' ', '_');

  if (fullName === 'Pedro Guerra') {
    return ({
      nomeCompleto: fullName,
      email: mail + '@trybe.com',
    })
  }

  if (fullName === 'Luiza Drumond') {
    return ({
      nomeCompleto: fullName,
      email: mail + '@trybe.com',
    })
  }

  if (fullName === 'Carla Paiva') {
    return ({
      nomeCompleto: fullName,
      email: mail + '@trybe.com',
    })
  }
}

const lotteryChecker = (number, func) => {
  let lotteryNumber = func();
  if (lotteryNumber === number) {
    return 'Parabéns você ganhou'
  } else return 'Tente novamente'
}

const lotteryNumbers = () => {
  let number = Math.round(Math.random(5) * 5);
  console.log(number);
  return number;
}

const RIGHT_ANSWERS = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const STUDENT_ANSWERS = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];

const evaluator = (rightAnswers, studentAnswers, func) => {
  let contador = func(rightAnswers, studentAnswers);
  return contador;

}

const finalEvaluator = (param1, param2) => {
  let cont = 0;
  for (let index = 0; index < param1.length; index++) {

    if (param2[index] === 'N.A') {
      cont = cont;
    } else if (param1[index] === param2[index]) {
      cont += 1;
    } else if (param1[index] != param2[index]) {
      cont -= 0.5;
    }
  }
  return cont;
}

console.log(evaluator(RIGHT_ANSWERS, STUDENT_ANSWERS, finalEvaluator));
