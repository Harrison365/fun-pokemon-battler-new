class Pokeball {
  constructor(pokemon) {
    this.pokemon = pokemon;
  }
  throw(givenPokemon) {
    if (!givenPokemon) {
      if (this.pokemon) {
        console.log(`${this.pokemon.name}! I choose you!!!!`);
        return this.pokemon;
      } else {
        console.log("No pokemon in ya ball and nothing to catch");
        return "empty ball, nothing to catch";
      }
    }
    if (givenPokemon) {
      if (!this.pokemon) {
        this.pokemon = givenPokemon;
        console.log(`you caught ${this.pokemon.name} ✅`);
      } else {
        console.log("You're full up ❌");
        return "full!";
      }
    }
  }

  isEmpty() {
    if (!this.pokemon) {
      return true;
    }
    return false;
  }
  contains() {
    if (this.pokemon) {
      return this.pokemon.name;
    }
    return "im empty inside 😭";
  }
}

module.exports = { Pokeball };
