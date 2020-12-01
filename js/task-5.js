let message;
let price;

let country = prompt('Введіть країну доставки');
if (country === null) {
  alert('У вашій країні доставка недоступна');
} else {
  country = country.toLowerCase();
  switch (country) {
    case 'китай':
      price = 100;
      country = 'Китаю';
      alert(`Доставка до ${country} буде коштувати ${price} кредитів`);
      break;

    case 'чилі':
      price = 250;
      country = 'Чилі';
      alert(`Доставка в ${country} буде коштувати ${price} кредитів`);
      break;

    case 'австралія':
      price = 170;
      country = 'Австралію';
      alert(`Доставка в ${country} буде коштувати ${price} кредитів`);
      break;

    case 'індія':
      price = 80;
      country = 'Індію';
      alert(`Доставка в ${country} буде коштувати ${price} кредитів`);
      break;

    case 'ямайка':
      price = 120;
      country = 'Ямайки';
      alert(`Доставка до ${country} буде коштувати ${price} кредитів`);
      break;

    default:
      alert('У вашій країні доставка недоступна');
  }
}
