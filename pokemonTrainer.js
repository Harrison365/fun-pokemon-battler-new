const {Pokeball} = require('./pokeball')
const {Pokemon} = require('./pokemon')
const {Fire, Grass, Water, Rattata, Charmander, Squirtle, Bulbasaur} = require('./pokemonType')


class Trainer {
    constructor(){
        const pokeball1 = new Pokeball()
        const pokeball2 = new Pokeball()
        const pokeball3 = new Pokeball()
        const pokeball4 = new Pokeball()
        const pokeball5 = new Pokeball()
        const pokeball6 = new Pokeball()
        this.pokeBall = [pokeball1, pokeball2, pokeball3, pokeball4, pokeball5, pokeball6]
this.belt = [];
    }
  catch(newPokemon){
    if (this.belt.length < 6){
const poppedPoke = this.pokeBall.pop()
    poppedPoke.throw(newPokemon)
    this.belt.push(poppedPoke)
    }
    return "your belt is full" ;
}
getPokemon(search){
 this.belt.   

}
  }


module.exports = {Trainer}