// Data types in JavaScript

// let a = 5;
// const b = 7.7;
// console.log(typeof a);
// console.log(typeof b);
// let isAdmin = true;
// console.log(typeof isAdmin);

// let c;
// console.log(typeof c);

// let d = null;
// console.log(d == Object);

// Zadacha 1

// const perHour = 80;
// const dailyWorkHour = 5;
// const weeklyWorkDays = 5;
// const totalHoursWork = 40;
// const remainingDays = 11;

// // Uspeete li vy?
// const daysToWork = totalHoursWork/dailyWorkHour
// const isPossible = (remainingDays-2)>daysToWork
// console.log(isPossible)

// // Skolko poluchew?
// const cash = daysToWork*dailyWorkHour*perHour
// console.log(cash)

// шаблонная Строка
// const projectName = 'сайт свайп'
// const price = 2000;
// const author = 'Василий Пупкин'
// console.log(`${author} заказал ${projectName} на сумму $${price}`)

// If and Else statement

// const money = 10
// if (money>50) {
//     console.log('Can buy product')
// } else if (money>40) {
//     console.log('may buy product')
// } else {
//     console.log('Biwarawka')
// }

// Zadacha 2

// const initialCash = 10000;
// const debt = 7 / 100;
// const finalCash = 13500;
// const month = 24;

// const d = initialCash * (1 + 0.07/12) ** month;

// if (d >= finalCash) {
//   console.log(
//     `Вася сможет купить дом уложившись в срок и при этом у него останется $${
//       d - finalCash
//     } денег`
//   );
// } else {
//   console.log(`Васе не хватает столько денег ${finalCash - d}`);
// }

// Switch case

// const role = "qdmin";
// switch (role) {
//   case "Manager":
//     console.log("I am manager");
//     break;
//   case "Admin":
//     console.log("admin");
//     break;
//   default:
//     console.log("Bezrabotny");
// }

// Ternary Operations
// const bmw = 10000;
// const audi = 8000;
// const budget = 8500;
// const message = `У меня денег хватет если куплю ${budget>bmw ? bmw : audi}`
// console.log(message)

// Zadacha 3

let userEntered = prompt("7 + - 15");

let message;
switch (true) {
  case userEntered === 'Я не робот':
  case Number(userEntered) === 22:
  case Number(userEntered) === -8:
    message = 'Успех';
    break;
  default:
    message = "Ты робот";
}
console.log(message);
