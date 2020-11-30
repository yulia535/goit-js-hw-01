let credits = 23580;
const pricePerDroid = 3000;
let message;

let quantity = prompt('Введіть кількість');
quantity = Number(quantity);
let totalPrice = pricePerDroid * quantity;

if (totalPrice > credits) {
  message = 'Недостатньо коштів на рахунку!';
} else if (quantity === 0) {
  message = 'Скасовано користувачем!';
} else if (totalPrice > 0 && totalPrice <= credits) {
  credits = credits - totalPrice;
  message = `Ви купили ${quantity} дроїдів, на рахунку залишилося ${credits} кредитів.`;
}

alert(message);
