window.onload = function() {
  function darkMode() {
    let backgroundColor = 'white';
    let newColor = 'black';

    document.getElementsByTagName('body')[0].style.backgroundColor = localStorage.getItem('bgColor');

    let botao = document.getElementById('darkMode');
    botao.addEventListener('click', function() {

      if (document.getElementsByTagName('body')[0].style.backgroundColor === newColor) {
        document.getElementsByTagName('body')[0].style.backgroundColor = backgroundColor;
        localStorage.setItem('bgColor', backgroundColor)

      } else {
        document.getElementsByTagName('body')[0].style.backgroundColor = newColor;
        localStorage.setItem('bgColor', newColor)
      }
    })
  }
  darkMode();

  function colorChanger() {
    let colors = ['red', 'green', 'blue', 'yellow', 'pink', 'gray']

    let botao = document.getElementById('alteraCor');
    document.getElementsByTagName('body')[0].style.color = localStorage.getItem('color');

    let index = 0;

    botao.addEventListener('click', function() {
      document.body.style.color = colors[index];
      localStorage.setItem('color', colors[index]);
      localStorage.setItem('count', index);
      index++;


      if (index === 6) {
        index = 0;
        // localStorage.setItem('count', 0);
      }
    })
  }

  colorChanger();


  let size = document.getElementsByTagName('body')[0].style.fontSize = '1em';
  console.log(size);

  function sizeChanger() {

    document.getElementsByTagName('body')[0].style.fontSize = localStorage.getItem('size');

    let botao = document.getElementById('alteraTamanho');
    botao.addEventListener('click', function() {

      if (document.getElementsByTagName('body')[0].style.fontSize === size) {
        document.getElementsByTagName('body')[0].style.fontSize = '1.3em';
        localStorage.setItem('size', '1.3em');
      } else {
        document.getElementsByTagName('body')[0].style.fontSize = size;
        localStorage.setItem('size', size);
      }
    })
  }
  sizeChanger();

  function spaceChanger() {
    let lineHeigth = document.getElementById('paragrafos').style.lineHeight;

    let botao = document.getElementById('alteraEspacamento');
    botao.addEventListener('click', function() {

      if (document.getElementById('paragrafos').style.lineHeight === lineHeigth) {
        document.getElementById('paragrafos').style.lineHeight = '2em';
      } else document.getElementById('paragrafos').style.lineHeight = lineHeigth;

    })
  }
  spaceChanger();

  function familyChanger() {
    let family = document.getElementById('paragrafos').style.fontFamily;

    let botao = document.getElementById('alteraFonte');
    botao.addEventListener('click', function() {

      if (document.getElementById('paragrafos').style.fontFamily === family)
        document.getElementById('paragrafos').style.fontFamily = 'sans';
      else document.getElementById('paragrafos').style.fontFamily = family;
    })
  }
  familyChanger();
}