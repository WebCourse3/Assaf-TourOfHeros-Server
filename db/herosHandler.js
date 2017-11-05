'use strict';

const Hero = require('../models/hero.js');
var heros = require('./herosList')


class herosHandler {
	static getHeros() {
		return heros;
	}

	static getHeroById(id) {
		return heros.find(hero => hero.id == id);
	}

	static heroExists(id) {
		return heros.filter(hero => hero.id == id).length === 1;
	}

	static addHero(heroId, heroName) {
		heros.push(new Hero(heroId, heroName));
	}

	static deleteHeroById(id) {
		heros = heros.filter(hero => hero.id !== id);
	}

	static deleteHeroByName(name) {
		heros = heros.filter(hero => hero.name !== name);
	}

	static updateHeroName(id, newName) {
		let hero = herosHandler.getHeroById(id);
		herosHandler.getHeroById(id).name = newName;
	}
}
module.exports = herosHandler;
moudle.exports.heros = heros;