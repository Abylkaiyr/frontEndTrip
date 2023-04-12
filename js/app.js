// // Упражнение склад
// const warehouse = {
//   goods: [],
//   findGoodByID: function (goodID) {
//     return this.goods.find((g) => g.id == goodID);
//   },
//   addGood: function (newgood) {
//     const existedGood = this.findGoodByID(newgood.id);
//     if (existedGood) {
//       console.log("Товар уже есть на складе");
//       return;
//     }
//     return this.goods.push(newgood);
//   },
//   getWeightKg: function () {
//     return this.goods.reduce((acc, el) => {
//       return (acc += el.weight?.kg ? el.weight.kg : 0);
//     }, 0);
//   },
// };

// // Товары
// const car = {
//   id: 1,
//   weight: {
//     kg: 1000,
//   },
//   brand: "Ford",
// };

// const chair = {
//   id: 2,
//   weight: {
//     kg: 2,
//   },
// };

// const paper = {
//   id: 3,
//   color: "red",
// };

// warehouse.addGood(car)
// warehouse.addGood(chair)
// warehouse.addGood(paper)
// console.log(warehouse.getWeightKg())

// let firstName = 'Anton';
// secondName = firstName;
// firstName = 'Max';
// console.log(firstName)
// console.log(secondName)

// const user1 = {
//   name: "Anton",
// };

// const user2 = user1;
// user1.name = "Max";
// console.log(user1.name);
// console.log(user2.name);

"use strict";

const user = {
  name: "Anton",
  id: 1,
};
// const newuser = Object.assign({}, user)
// user.name = "Max";
// console.log(user.name)
// console.log(newuser.name)
const newuser = {
  ...user,
};
user.name = "Max";
console.log(user.name);
console.log(newuser.name);
