const total = 100;
let ordered = 50;
let type =
  ordered <= total
    ? "Замовлення оформлено, з вами зв'яжеться менеджер"
    : 'На складі недостатньо товарів!';

console.log(type);

ordered = 20;
type =
  ordered <= total
    ? "Замовлення оформлено, з вами зв'яжеться менеджер"
    : 'На складі недостатньо товарів!';
console.log(type);

ordered = 80;
type =
  ordered <= total
    ? "Замовлення оформлено, з вами зв'яжеться менеджер"
    : 'На складі недостатньо товарів!';
console.log(type);

ordered = 130;
type =
  ordered <= total
    ? "Замовлення оформлено, з вами зв'яжеться менеджер"
    : 'На складі недостатньо товарів!';
console.log(type);
