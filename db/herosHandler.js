'use strict';

const Hero = require('../models/hero.js');

class herosHandler {
	constructor(heros) {
		this.heros = heros;
	}

	getHeros() {
		return this.heros;
	}

	getHeroById(id) {
		return this.heros.find(hero => hero.id == id);
	}

	heroExists(id) {
		return this.heros.filter(hero => hero.id == id).length === 1;
	}

	addHero(heroId, heroName) {
		if(this.heroExists(heroId)){
			throw new Error("hero with id already exists");
		} else {
			this.heros.push(new Hero(heroId, heroName));
		}
	}

	deleteHeroById(id) {
		this.heros = this.heros.filter(hero => hero.id !== id);
	}

	deleteHeroByName(name) {
		this.heros = this.heros.filter(hero => hero.name !== name);
	}

	updateHeroName(id, newName) {
		this.getHeroById(id).name = newName;
	}
}

module.exports = herosHandler;
