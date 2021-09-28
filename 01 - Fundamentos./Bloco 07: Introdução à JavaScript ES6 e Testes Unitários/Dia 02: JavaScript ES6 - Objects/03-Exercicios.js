const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const lesson4 = {
  materia: 'Física',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};


const addRotation = (obj, key, value) => {
  obj[key] = value;
}

addRotation(lesson2, 'turno', 'noite');

const listKeys = (obj) => {
  return Object.keys(obj);
}

const objectLength = (obj) => {
  return Object.keys(obj).length;
}

const objectValues = (obj) => {
  return Object.values(obj);
}


let allLessons = { lesson1, lesson2, lesson3, lesson4 };


const allStudents = (obj) => {
  let contador = 0;

  for (let index = 0; index < Object.keys(obj).length; index++) {
    contador += Object.values(obj)[index]['numeroEstudantes'];
  }
  return contador;
}

const getValueByNumber = (obj, int) => {

  return Object.values(obj)[int];

}

const verifyPair = (obj, key, value) => {

  let answer = false;
  const arr = [key, value];

  for (let index = 0; index < Object.keys(obj).length; index++) {

    if (Object.entries(obj)[index][0] == arr[0] && Object.entries(obj)[index][1] == arr[1]) {
      answer = true;
    }
  }
  return answer;
}

const reportMatematica = (obj) => {
  let contador = 0;
  for (key in obj) {
    if ((obj[key]['materia']) == 'Matemática') {
      contador += ((obj)[key]['numeroEstudantes']);
    }
  }
  return contador;
}

const createReport = (obj, prof) => {
  let report = {};
  report['professor'] = prof;
  report['aulas'] = [];
  report['estudantes'] = 0;

  for (key in obj) {
    if ((obj[key]['professor']) == prof) {

      if (report.aulas[0] != null) {
        report.aulas.push((obj[key]['materia']));

      } else report.aulas = [(obj[key]['materia'])];

      report.estudantes += (obj[key]['numeroEstudantes'])
    }
  }
  return report;
}

console.log(createReport(allLessons, 'Maria Clara'));
