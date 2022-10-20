const { Pokemon } = require("../pokemon");

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

  describe("isAffectiveAgainst", () => {
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
    // test("fire pokemon is affective against grass type", () => {
    //   const Charizard = new Fire("Charizard", 15, 3);
    //   const Bulbasaur = new Grass("Bulbasaur", 15, 3);
    //   expect(Charizard.isEffectiveAgainst(Bulbasaur)).toBe(true);
    // });
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
  // test("fire pokemon is affective against grass type", () => {
  //   const Charizard = new Fire("Charizard", 15, 3);
  //   const Bulbasaur = new Grass("Bulbasaur", 15, 3);
  //   expect(Charizard.isEffectiveAgainst(Bulbasaur)).toBe(true);
  // });
});

describe("takeDamage", () => {
  test("hitPoints reduced by given attackDamage", () => {
    const Ditto = new Pokemon("Ditto", 15, 3);
    const Meowth = new Pokemon("Meowth", 15, 3);
    Ditto.takeDamage(Meowth.attackDamage);
    expect(Ditto.hitPoints).toBe(12);
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
  });
  test("returns a true if pokemon's hitPoints is <=0", () => {
    const Ditto = new Pokemon("Ditto", 15, 3);
    Ditto.takeDamage(100);
    expect(Ditto.hasFainted()).toBe(true);
  });
});
