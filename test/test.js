const Hero = require('../models/hero.js');
var herosHandler = require('../db/herosHandler')

var herosList = [
	new Hero("1", "Assaf Marzan"),
	new Hero("2", "Yuval Marzan"),
	new Hero("3", "Orel Zluf"),
	new Hero("4", "Tomer Dobkin")
];

describe('herosHandler', function() {
	describe('#getHeroById()', function() {
		it('should return the hero matched by the id', function() {
			herosHandler.heros
		});
	});
});

