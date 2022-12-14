const { Pokemon } = require("../pokemon");
const {
  Fire,
  Grass,
  Water,
  Rattata,
  Charmander,
  Squirtle,
  Bulbasaur,
} = require("../pokemonType");
const { Pokeball } = require("../pokeball.js");
const { Trainer } = require("../pokemonTrainer");

describe("Pokemon", () => {
  test("creates a pokemon with given name", () => {
    const Meowth = new Pokemon("Meowth");
    expect(Meowth).toEqual(expect.objectContaining({ name: "Meowth" }));
    expect(Meowth.name).toEqual("Meowth");
  });
  test("creates a pokemon with default type, normal", () => {
    const Ditto = new Pokemon();
    expect(Ditto).toEqual(expect.objectContaining({ type: "normal" }));
    expect(Ditto.type).toEqual("normal");
  });
  test("creates a pokemon with given attackPoints", () => {
    const Ditto = new Pokemon("Ditto", 15);
    expect(Ditto).toEqual(expect.objectContaining({ hitPoints: 15 }));
    expect(Ditto.hitPoints).toEqual(15);
  });
  test("creates a pokemon with given attackDamage", () => {
    const Ditto = new Pokemon("Ditto", 15, 3);
    expect(Ditto).toEqual(expect.objectContaining({ attackDamage: 3 }));
    expect(Ditto.attackDamage).toEqual(3);
  });
  test("creates a pokemon with default move, tackle", () => {
    const Ditto = new Pokemon("Ditto", 15, 3);
    expect(Ditto).toEqual(expect.objectContaining({ move: "tackle" }));
    expect(Ditto.move).toEqual("tackle");
  });
});

describe("isEffectiveAgainst", () => {
  test("returns false whenever", () => {
    const Ditto = new Pokemon("Ditto", 15, 3);
    const Ditto2 = new Pokemon("Ditto", 15, 3);
    expect(Ditto.isEffectiveAgainst(Ditto2)).toBe(false);
  });
  test("returns false when given normal pokemon", () => {
    const Ditto = new Pokemon("Ditto", 15, 3);
    const Meowth = new Pokemon("Meowth", 15, 3);
    expect(Ditto.isEffectiveAgainst(Meowth)).toBe(false);
  });
  test("fire pokemon is affective against grass type", () => {
    const Charizard = new Fire("Charizard", 15, 3);
    const Bulbasaur = new Grass("Bulbasaur", 15, 3);
    expect(Charizard.isEffectiveAgainst(Bulbasaur)).toBe(true);
  });
  test("Water pokemon is affective against fire type", () => {
    const Piplup = new Water("Piplup", 15, 3);
    const Charizard = new Fire("Charizard", 15, 3);
    expect(Piplup.isEffectiveAgainst(Charizard)).toBe(true);
  });
  test("Grass pokemon is affective against Water type", () => {
    const Bulbasaur = new Grass("Bulbasaur", 15, 3);
    const Piplup = new Water("Piplup", 15, 3);
    expect(Bulbasaur.isEffectiveAgainst(Piplup)).toBe(true);
  });
  test("Grass pokemon is affective against Water type", () => {
    const Bulbasaur = new Grass("Bulbasaur", 15, 3);
    const Piplup = new Water("Piplup", 15, 3);
    expect(Bulbasaur.isEffectiveAgainst(Piplup)).toBe(true);
  });
  test("Any type against a normal type returns false", () => {
    const Ditto = new Pokemon("Ditto", 15, 3);
    const Piplup = new Water("Piplup", 15, 3);
    expect(Ditto.isEffectiveAgainst(Piplup)).toBe(false);
  });
});

describe("isWeakAgainst", () => {
  test("returns false whenever", () => {
    const Ditto = new Pokemon("Ditto", 15, 3);
    const Ditto2 = new Pokemon("Ditto", 15, 3);
    expect(Ditto.isWeakAgainst(Ditto2)).toBe(false);
  });
  test("returns false when given normal pokemon", () => {
    const Ditto = new Pokemon("Ditto", 15, 3);
    const Meowth = new Pokemon("Meowth", 15, 3);
    expect(Ditto.isWeakAgainst(Meowth)).toBe(false);
  });
  test("Fire type isWeakAgainst Water returns true", () => {
    const Piplup = new Water("Piplup", 15, 3);
    const Charizard = new Fire("Charizard", 15, 3);
    expect(Charizard.isWeakAgainst(Piplup)).toBe(true);
  });
  test("Water type isWeakAgainst Grass returns true", () => {
    const Bulbasaur = new Grass("Bulbasaur", 15, 3);
    const Piplup = new Water("Piplup", 15, 3);
    expect(Piplup.isWeakAgainst(Bulbasaur)).toBe(true);
  });
  test("Grass type isWeakAgainst fire returns true", () => {
    const Bulbasaur = new Grass("Bulbasaur", 15, 3);
    const Charizard = new Fire("Charizard", 15, 3);
    expect(Bulbasaur.isWeakAgainst(Charizard)).toBe(true);
  });
});

describe("takeDamage", () => {
  test("hitPoints reduced by given attackDamage", () => {
    const Ditto = new Pokemon("Ditto", 15, 3);
    const Meowth = new Pokemon("Meowth", 15, 3);
    Ditto.takeDamage(Meowth.attackDamage);
    expect(Ditto.hitPoints).toBe(12);
  });
});

describe("useMove", () => {
  test("returns attackPoints of given pokemon (keep an eye out for console.log)", () => {
    const Ditto = new Pokemon("Ditto", 15, 3);
    expect(Ditto.useMove()).toBe(3);
  });
});

describe("hasFained", () => {
  test("returns a false if pokemon's hitPoints is >0", () => {
    const Ditto = new Pokemon("Ditto", 15, 3);
    expect(Ditto.hasFainted()).toBe(false);
  });
  test("returns a true if pokemon's hitPoints is <=0", () => {
    const Ditto = new Pokemon("Ditto", 15, 3);
    Ditto.takeDamage(100);
    expect(Ditto.hasFainted()).toBe(true);
  });
});

describe("Individual Pokemon", () => {
  test("creates a pokemon with relevant className and Move", () => {
    const newRattata = new Rattata(15, 3);
    const newCharmander = new Charmander(15, 3);
    const newSquirtle = new Squirtle(15, 3);
    const newBulbasaur = new Bulbasaur(15, 3);
    expect(newRattata.move).toEqual("tackle");
    expect(newRattata).toEqual(
      expect.objectContaining({
        name: "Rattata",
        type: "normal",
        hitPoints: 15,
        attackDamage: 3,
        move: "tackle",
      })
    );
    expect(newCharmander.move).toEqual("ember");
    expect(newCharmander).toEqual(
      expect.objectContaining({
        name: "Charmander",
        type: "fire",
        hitPoints: 15,
        attackDamage: 3,
        move: "ember",
      })
    );
    expect(newSquirtle.move).toEqual("water gun");
    expect(newSquirtle).toEqual(
      expect.objectContaining({
        name: "Squirtle",
        type: "water",
        hitPoints: 15,
        attackDamage: 3,
        move: "water gun",
      })
    );
    expect(newBulbasaur.move).toEqual("vine whip");
    expect(newBulbasaur).toEqual(
      expect.objectContaining({
        name: "Bulbasaur",
        type: "grass",
        hitPoints: 15,
        attackDamage: 3,
        move: "vine whip",
      })
    );
  });
});

describe("pokeball contains pokemon", () => {
  test("contains a snorlax", () => {
    const snorlax = new Pokemon("snorlax", 15, 3);
    const pokeballOne = new Pokeball(snorlax);
    expect(pokeballOne.pokemon.name).toBe("snorlax");
  });
});
describe("pokeball throw", () => {
  test("if given arguement of pokemon and pokeball is empty, catch the pokeman", () => {
    const snorlax = new Pokemon("snorlax", 15, 3);
    const pokeballOne = new Pokeball();
    pokeballOne.throw(snorlax);
    expect(pokeballOne.pokemon.name).toBe("snorlax");
    //console.log("you caught snorlax")
  });
  test("if given arguement of pokemon and pokeball is full, keep current pokemon and send console message", () => {
    const snorlax = new Pokemon("snorlax", 15, 3);
    const psyduck = new Water("psyduck", 69420, 69420);
    const pokeballOne = new Pokeball(snorlax);
    pokeballOne.throw(psyduck);
    expect(pokeballOne.pokemon.name).toBe("snorlax");
    //console.log("you re full up")
  });
  test("if pokeball is full and no arguement is passed, throw will return pokemon 'i choose you' message ", () => {
    const jigglypuff = new Pokemon("jigglypuff", 15, 3);
    const pokeballOne = new Pokeball(jigglypuff);
    expect(pokeballOne.throw()).toEqual({
      name: "jigglypuff",
      type: "normal",
      hitPoints: 15,
      attackDamage: 3,
      move: "tackle",
    });
  });
  test("if pokeball is empty and no arguements passed, will console log message and pokeball will remain empty", () => {
    const emptyBall = new Pokeball();
    expect(emptyBall.throw()).toBe("empty ball, nothing to catch");
  });
});

describe("isEmpty", () => {
  test("if pokeball is empty, return true", () => {
    const pokeballOne = new Pokeball();
    expect(pokeballOne.isEmpty()).toBe(true);
  });
  test("if pokeball is full, return false", () => {
    const pokeballOne = new Pokeball();
    const jigglypuff = new Pokemon("jigglypuff", 15, 3);
    pokeballOne.throw(jigglypuff);
    expect(pokeballOne.isEmpty()).toBe(false);
  });
});

describe("contains", () => {
  test("if pokeball is empty, return empty", () => {
    const pokeballOne = new Pokeball();
    expect(pokeballOne.contains()).toBe("im empty inside ????");
  });
  test("if pokeball is full, return name", () => {
    const pokeballOne = new Pokeball();
    const jigglypuff = new Pokemon("jigglypuff", 15, 3);
    pokeballOne.throw(jigglypuff);
    expect(pokeballOne.contains()).toBe("jigglypuff");
  });
});

describe("Trainer", () => {
  test("has a belt property that is an array type", () => {
    const newTrainer = new Trainer();
    expect(newTrainer.belt).toEqual([]);
  });
  test("If has room in belt will catch a new pokemon in a pokeball and add to belt", () => {
    const Politoed = new Water("Politoed", 53, 15);
    const newTrainer = new Trainer();
    newTrainer.catch(Politoed);
    expect(newTrainer.belt[0].pokemon.name).toBe("Politoed");
  });
  test("If has no room in belt will not catch a new pokemon and will instead", () => {
    const Politoed = new Water("Politoed", 53, 15);

    const newTrainer = new Trainer();
    newTrainer.catch(Politoed);
    newTrainer.catch(Politoed);
    newTrainer.catch(Politoed);
    newTrainer.catch(Politoed);
    newTrainer.catch(Politoed);
    newTrainer.catch(Politoed);
    newTrainer.catch(Politoed);
    expect(newTrainer.catch(Politoed)).toEqual("your belt is full");
    expect(newTrainer.belt).toEqual([
      {
        pokemon: {
          name: "Politoed",
          type: "water",
          hitPoints: 53,
          attackDamage: 15,
          move: "tackle",
        },
      },
      {
        pokemon: {
          name: "Politoed",
          type: "water",
          hitPoints: 53,
          attackDamage: 15,
          move: "tackle",
        },
      },
      {
        pokemon: {
          name: "Politoed",
          type: "water",
          hitPoints: 53,
          attackDamage: 15,
          move: "tackle",
        },
      },
      {
        pokemon: {
          name: "Politoed",
          type: "water",
          hitPoints: 53,
          attackDamage: 15,
          move: "tackle",
        },
      },
      {
        pokemon: {
          name: "Politoed",
          type: "water",
          hitPoints: 53,
          attackDamage: 15,
          move: "tackle",
        },
      },
      {
        pokemon: {
          name: "Politoed",
          type: "water",
          hitPoints: 53,
          attackDamage: 15,
          move: "tackle",
        },
      },
    ]);
  });
});

describe("getPokemon", () => {
  test("returns pokemon object should we have the desired pokemon ", () => {
    const Politoed = new Water("Politoed", 53, 15);
    const newTrainer = new Trainer();
    newTrainer.catch(Politoed);
    expect(newTrainer.getPokemon("Politoed")).toEqual({
      name: "Politoed",
      type: "water",
      hitPoints: 53,
      attackDamage: 15,
      move: "tackle",
    });
  });
});
