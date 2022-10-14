const buttonCreate = document.querySelector('#criar-carta');
const inputText = document.querySelector('#carta-texto');
const paragraphText = document.querySelector('#carta-gerada');
const span = document.getElementsByTagName('span');
const counterText = document.querySelector('#carta-contador');

const classGroup = [
  ['newspaper', 'magazine1', 'magazine2'],
  ['medium', 'big', 'reallybig'],
  ['rotateleft', 'rotateright'],
  ['skewleft', 'skewright'],
];

const addClass = (element) => {
  const randomClass = Math.floor(Math.random() * classGroup[0].length);
  const randomClass2 = Math.floor(Math.random() * classGroup[1].length);
  const randomClass3 = Math.floor(Math.random() * classGroup[2].length);
  const randomClass4 = Math.floor(Math.random() * classGroup[3].length);
  element.className = `${classGroup[0][randomClass]} ${classGroup[1][randomClass2]} ${classGroup[2][randomClass3]} ${classGroup[3][randomClass4]}`;
};

const createLetter = () => {
  let counter = 0;
  const splitLetter = inputText.value.split(' ');
  for (let i = 0; i < splitLetter.length; i += 1) {
    const spanCreate = document.createElement('span');
    spanCreate.innerText = `${splitLetter[i]}`;
    spanCreate.id = [i];
    addClass(spanCreate);
    paragraphText.appendChild(spanCreate);
    counter += 1;
  }
  counterText.innerText = counter;
};

const insertSpan = () => {
  if (paragraphText.childNodes) {
    paragraphText.innerHTML = '';
    createLetter();
  } else {
    createLetter();
  }
};

const verifyText = () => {
  if (inputText.value === '' || inputText.value === ' ') {
    paragraphText.innerText = 'Por favor, digite o conteúdo da carta.';
  } else {
    insertSpan();
  }
};

const changeClass = (event) => {
  for (const i of span) {
    if (event.target === i) {
      addClass(event.target);
    }
  }
};

document.addEventListener('click', changeClass);
buttonCreate.addEventListener('click', verifyText);
