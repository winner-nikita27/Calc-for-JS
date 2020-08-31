//делаем поле для вывода результата и создаем контейнер для клавы.
const output = document.querySelector('output');

const div = document.createElement('div');
div.classList.add('keybrd');
document.querySelector('.calc').appendChild(div);

//преобразуем строку в массив.
'C CE % / 7 8 9 * 4 5 6 - 1 2 3 + 0 ( ) ='.split(' ').map((symbol) => {
  //// записываем значение символа в атрибут "value" кнопки
  div.insertAdjacentHTML('beforeend', `<button value="${symbol}">${symbol}</button>`);
});

div.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    // // по клику вызывается функция со значением кнопки в качестве параметра
    calc(e.target.value);
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key.match(/[0-9%\/*\-+\(\)=]|Backspace|Enter/)) calc(e.key);
});

// функция берет значение кнопки или ключ клавиши
function calc(value) {
  if (value.match(/=|Enter/)) {
    try {
      // // вычисляем значение строки
      if (output.textContent !== '') {
        output.textContent = Math.trunc(math.evaluate(output.textContent));
      }
    } catch {
      let oldValue = output.textContent;
      let newValue = 'Неправильная операция.';

      output.textContent = newValue;
      const timer = setTimeout(() => {
        output.textContent = oldValue;
        clearTimeout(timer);
      }, 1600);
    }
  } else if (value === 'C') {
    output.textContent = '';
  } else if (value.match(/CE|Backspace/)) {
    //// уменьшаем строку на один символ при нажатии backspace
    output.textContent = output.textContent.substring(0, output.textContent.length - 1);
  } else {
    output.textContent += value;
  }
}
