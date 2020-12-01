let message;
const ADMIN_PASSWORD = 'jqueryismyjam';

let password = prompt('Введіть пароль');

if (password === ADMIN_PASSWORD) {
  message = 'Ласкаво просимо!';
} else if (password === null) {
  message = 'Скасовано користувачем!';
} else {
  message = 'Доступ заборонений, невірний пароль!';
}

alert(message);
