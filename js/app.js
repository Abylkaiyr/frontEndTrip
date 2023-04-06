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

const perHour = 80;
const dailyWorkHour = 5;
const weeklyWorkDays = 5;
const totalHoursWork = 40;
const remainingDays = 11;

// Uspeete li vy?
const daysToWork = totalHoursWork/dailyWorkHour
const isPossible = (remainingDays-2)>daysToWork
console.log(isPossible)

// Skolko poluchew?
const cash = daysToWork*dailyWorkHour*perHour
console.log(cash)