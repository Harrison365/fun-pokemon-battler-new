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
    if (this.type === "fire" && secondPokemon.type === "grass"){
      return true
    }
    if (this.type === 'water' && secondPokemon.type === 'fire'){
      return true
    }
    if (this.type === 'grass' && secondPokemon.type === "water"){
    return true
  }
  return false
}

  isWeakAgainst(secondPokemon) {
    if (this.type === "fire" && secondPokemon.type === 'water'){
      return true;
    }
    if (this.type === "water" && secondPokemon.type === 'grass'){
      return true;
  }
  if (this.type === "grass" && secondPokemon.type === 'fire'){
    return true;
  }
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
