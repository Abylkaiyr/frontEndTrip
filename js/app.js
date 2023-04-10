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

// let userEntered = prompt("7 + - 15");

// let message;
// switch (true) {
//   case userEntered === 'Я не робот':
//   case Number(userEntered) === 22:
//   case Number(userEntered) === -8:
//     message = 'Успех';
//     break;
//   default:
//     message = "Ты робот";
// }
// console.log(message);

// Zadacha 4

// --- Balance bolwe 1000 ili bonus balance 100
// --- On ne zabanen isBanned
// --- Igra ne kupleno isExist
// --- Igra v prodaje isSelling

// const balance = 899;
// const bonusBalance = 277;
// const isBanned = false;
// const isExist = false;
// const isSelling = true;
// const canBuy =
//   (balance >= 1000 || bonusBalance >= 100) &&
//   !isBanned &&
//   !isExist &&
//   isSelling;
// console.log(`Могу купить игру: ${canBuy ? 'да' : 'нет'}`);

// function logName(){
//   console.log('Мое имя Антон')
// }

// logName();

// Ананомные функций

// function powerOfTwo(num) {
//   return num * num;
// }

// console.log(powerOfTwo(5))

// const poft = (num) => num*num;
// console.log(poft)

// Zadacha 5

// const pof = (num, power) => num ** power;
// console.log(pof(2, 5));

// const canAccess = (age) => (age < 18 ? "No" : "Yes");
// console.log(typeof canAccess);
// console.log(canAccess(19));

// Zadacha 6
// const userAge = 24;
// const userWork = true;
// const userMoney = 1500;

// console.log(
//   canUserBuy(userAge, userWork, userMoney) >= 2000
//     ? "Сможет купить"
//     : "Не сможет купить"
// );

// function canUserBuy(userAge, userWork, userMoney) {
//   if (userMoney > 2000) {
//     return userMoney;
//   } else {
//     if (userAge >= 24 && userWork) {
//       return userMoney + 500;
//     } else if (userAge >= 24 && !userWork) {
//       return userMoney + 100;
//     } else {
//       return userMoney;
//     }
//   }
// }

// Massivi v JS

// const roles = ["Anton", "Larichev", "Maxim", "Galkin"];
// roles.push('Erema')
// roles.unshift('Vasya')
// console.log(roles)

// const roles = ["user", "admin", "manager", "hero", "JackWilsher"];
// const newRoles = roles.splice(1,10);
// console.log(roles)
// console.log(newRoles)

// Rest operator
// const data = [1, 2, 3, 4, 5, 6, 7, 8];
// const [one, two, ...others] = data;
// console.log(one, two, others)

// const url = "https://purpleschool.ru/course/javascript";

// function getURLparams(url) {
//   const [protoc, _, host, ...path] = url.split("/");
// }

// loop

// const tasks = ["task1", "task2", "task3"];

// for (let i = 0; i < tasks.length; i++) {
//   if (tasks[i] === "task2") {
//     continue;
//   }
//   console.log(tasks[i]);
// }

// const arr = ["!", "JS", "LOVE", "I"];
// console.log(arr.reverse().join(' '))

//  for of

// const arr = [1, 2, 3, 4, 5, 6];
// for (let element of arr) {
//   console.log(element);
// }

// Zadacha

//

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

// Функция высшего порядка
function calculate(a, b, fn) {
  console.log(fn.name)
  return fn(a, b);
}

console.log(calculate(5, 3, add));
