const {Pokemon} = require("./pokemon")

class Rattata extends Pokemon {
    constructor(name, hitpoints, attackDamage){
    super('Rattata', hitpoints, attackDamage)

    }
}

class Fire extends Pokemon {
   constructor (name, hitPoints, attackDamage){
   super(name, hitPoints, attackDamage)
   this.type = "fire";
   }
}

class Charmander extends Fire {
    constructor(name, hitpoints, attackDamage){
    super('Charmander', hitpoints, attackDamage)

    }
}

class Grass extends Pokemon {
    constructor (name, hitPoints, attackDamage){
    super(name, hitPoints, attackDamage)
    this.type = "grass";
    }
 }
 class Bulbasaur extends Grass {
    constructor(name, hitpoints, attackDamage){
    super('Bulbasaur', hitpoints, attackDamage)

    }
}

 class Water extends Pokemon {
    constructor (name, hitPoints, attackDamage){
    super(name, hitPoints, attackDamage)
    this.type = "water";
    }
 }

 class Squirtle extends Water {
    constructor(name, hitpoints, attackDamage){
    super('Squirtle', hitpoints, attackDamage)

    }
}


module.exports = {Fire, Grass, Water, Rattata, Charmander, Squirtle, Bulbasaur}