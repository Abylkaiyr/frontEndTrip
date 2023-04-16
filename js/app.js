'use strict'
const audi = {
    make: 'audi',
    model: 'A3',
    year: 2009,
    damages: [],
    addDamage(part, rate){
        this.damages.push({
            part,
            rate
        })
    }
}

audi.addDamage('Капот', 1)