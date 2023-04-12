// Упражнение склад
const warehouse = {
  goods: [],
  findGoodByID: function (goodID) {
    return this.goods.find((g) => g.id == goodID);
  },
  addGood: function (newgood) {
    const existedGood = this.findGoodByID(newgood.id);
    if (existedGood) {
      console.log("Товар уже есть на складе");
      return;
    }
    return this.goods.push(newgood);
  },
  getWeightKg: function () {
    return this.goods.reduce((acc, el) => {
      return (acc += el.weight?.kg ? el.weight.kg : 0);
    }, 0);
  },
};

// Товары
const car = {
  id: 1,
  weight: {
    kg: 1000,
  },
  brand: "Ford",
};

const chair = {
  id: 2,
  weight: {
    kg: 2,
  },
};

const paper = {
  id: 3,
  color: "red",
};

warehouse.addGood(car)
warehouse.addGood(chair)
warehouse.addGood(paper)
console.log(warehouse.getWeightKg())
