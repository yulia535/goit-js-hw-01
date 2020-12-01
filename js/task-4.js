let credits = 23580;
const pricePerDroid = 3000;
let message;

let quantity = prompt('Введіть кількість');
let totalPrice = pricePerDroid * parseInt(quantity);
if (quantity === null) {
  message = 'Скасовано користувачем!';
  alert(message);
} else if (totalPrice > credits) {
  message = 'Недостатньо коштів на рахунку!';
  alert(message);
} else if (totalPrice > 0 && totalPrice <= credits) {
  credits = credits - totalPrice;
  message = `Ви купили ${quantity} дроїдів, на рахунку залишилося ${credits} кредитів.`;
  alert(message);
}
