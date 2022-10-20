const {Pokemon} = require("./pokemon")

class Rattata extends Pokemon {
    constructor( hitpoints, attackDamage){
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
    constructor(hitpoints, attackDamage){
    super('Charmander', hitpoints, attackDamage)
    this.move = "ember";
    }
}

class Grass extends Pokemon {
    constructor (name, hitPoints, attackDamage){
    super(name, hitPoints, attackDamage)
    this.type = "grass";
    }
 }
 class Bulbasaur extends Grass {
    constructor(hitpoints, attackDamage){
    super('Bulbasaur', hitpoints, attackDamage)
    this.move = "vine whip";
    }
}

 class Water extends Pokemon {
    constructor (name, hitPoints, attackDamage){
    super(name, hitPoints, attackDamage)
    this.type = "water";
    }
 }

 class Squirtle extends Water {
    constructor( hitpoints, attackDamage){
    super('Squirtle', hitpoints, attackDamage)
    this.move = "water gun";
    }
}


module.exports = {Fire, Grass, Water, Rattata, Charmander, Squirtle, Bulbasaur}