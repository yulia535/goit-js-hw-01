let total = 0;

do {
  let input = prompt('Введіть число');
  if (input === null) {
    break;
  }
  if (Number.isNaN(parseInt(input))) {
    alert('Було написано не число, спробуйте ще раз');
    continue;
  }
  total += parseInt(input);
} while (true);

alert(`Загальна сума чисел дорівнює ${total}`);
