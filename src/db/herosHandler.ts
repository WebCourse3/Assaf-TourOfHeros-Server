'use strict';
import Hero = require('../models/hero');

class herosHandler {
	heros: Array<Hero>;

	constructor(heros: Array<Hero>) {
		this.heros = heros;
	}

	getHeros(): Array<Hero> {
		return this.heros;
	}

	getHeroById(id: string): Hero {
		return this.heros.find(hero => hero.id == id);
	}

	heroExists(id: string) {
		return this.heros.filter(hero => hero.id == id).length === 1;
	}

	addHero(heroId: string, heroName: string) {
		if(this.heroExists(heroId)){
			throw new Error("hero with id already exists");
		} else {
			this.heros.push(new Hero(heroId, heroName));
		}
	}

	deleteHeroById(id: string) {
		this.heros = this.heros.filter(hero => hero.id !== id);
	}

	deleteHeroByName(name: string) {
		this.heros = this.heros.filter(hero => hero.name !== name);
	}

	updateHeroName(id:string, newName:string) {
		this.getHeroById(id).name = newName;
	}
}

export = herosHandler;
