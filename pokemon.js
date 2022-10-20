const { truncate } = require("fs");

class Pokemon {
  constructor(name, hitPoints, attackDamage) {
    this.name = name;
    this.type = "normal";
    this.hitPoints = hitPoints;
    this.attackDamage = attackDamage;
    this.move = "tackle";
  }

  isEffectiveAgainst(secondPokemon) {
    return false;
  }

  isWeakAgainst(secondPokemon) {
    return false;
  }

  takeDamage(attackDamage) {
    this.hitPoints -= attackDamage;
  }
  useMove() {
    console.log(`${this.name} used ${this.name}'s ${this.move} move`);
    return this.attackDamage;
  }
  hasFainted() {
    if (this.hitPoints <= 0) {
      return true;
    } else {
      return false;
    }
  }
}

// class Fire extends Pokemon{}

module.exports = { Pokemon };
