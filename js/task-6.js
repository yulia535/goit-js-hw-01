let total = 0;

do {
  let input = prompt('Введіть число');
  if (input === null) {
    break;
  }
  input = Number(input);
  if (Number.isNaN(input)) {
    alert('Було написано не число, спробуйте ще раз');
    continue;
  }
  total += input;
} while (true);

alert(`Загальна сума чисел дорівнює ${total}`);
