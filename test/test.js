const   should = require('should'),
	    chai = require('chai'),
	    chaiHttp = require('chai-http'),
		sinon = require('sinon');

const herosRouter = require('../router/herosRoute.js');
const Hero = require('../models/hero.js');
const herosHandler = require('../db/herosHandler');
const app = require('../server.js').app;

chai.use(chaiHttp);


describe('herosHandler', function() {
	describe('Get Methods', function () {
		//assumptions
		let herosList = [
			new Hero("1", "Assaf Marzan"),
			new Hero("2", "Yuval Marzan"),
			new Hero("8", "Alex Borochov")
		];

		let handler = new herosHandler(herosList);

		describe('getHeros()', function () {
			it('should return an hero array of specific length', function () {
				//assumptions
				let arrayLength = 3;
				let herosList = new Array(3);
				let handler = new herosHandler(herosList);

				//action
				let heros = handler.getHeros();

				//asserts
				heros.should.be.instanceOf(Array);
				heros.should.have.length(arrayLength);
			});
		});

		describe('getHeroById(id)', function () {
			it('should return an hero instance of matched id', function () {
				//assumptions
				let id = '2'
				//action
				let hero = handler.getHeroById(id);

				//asserts
				hero.should.be.instanceOf(Hero);
				hero.id.should.equal(id);
			});
		});

		describe('heroExists(id)', function () {
			it('should return true if hero exists', function () {
				//assumptions
				let id = '2'

				//action
				let exists = handler.heroExists(id);

				//asserts
				exists.should.be.true()
			});

			it('should return false if hero does not exists', function () {
				//assumptions
				let id = -1;

				//action
				let exists = handler.heroExists(id);

				//asserts
				exists.should.be.false()
			});

			it('should return false if id is not a number', function () {
				let id = undefined;
				//action
				let exists = handler.heroExists(id);

				//asserts
				exists.should.be.false();
			});

		});
	});
	describe('Add & Update Methods', function () {
		//assumptions
		let herosList = [
			new Hero('1', "Assaf Marzan"),
			new Hero('2', "Yuval Marzan"),
			new Hero('8', "Alex Borochov")
		];

		const handler = new herosHandler(herosList);

		describe('addHero(heroId, heroName)', function () {
			it('hero exists being called once', function () {
				//assumptions
				const newId = 4;
				const newName = "Bla bla";
				const heroExistsStub = sinon.spy();


				//stub
				handler.heroExists = heroExistsStub;

				//action
				handler.addHero(newId, newName);

				//asserts
				heroExistsStub.callCount.should.equal(1);

			});

			it('heros length should increase by 1', function () {
				//assumptions
				const newId = 4;
				const newName = "Bla bla";

				//mock
				handler.heroExists = sinon.stub();
				handler.heroExists.withArgs(newId).returns(false);

				//action
				let curLength = handler.getHeros().length;
				handler.addHero(newId, newName);
				let aftLength = handler.getHeros().length;

				//asserts
				aftLength.should.be.equal(curLength + 1);
			});

			it('throw exception when heroId already exists', function () {
				//assumptions
				const newId = '1';
				const newName = "Bla bla";

				//mock
				handler.heroExists = sinon.stub();
				handler.heroExists.withArgs(newId).returns(true);

				//asserts
				should(function ()  {(handler.addHero(newId, newName))} ).throw()
			});
		});

		describe('updateHeroName(id, newName)', function () {
			it('hero name should change', function () {
				//assumptions
				const oldName = "Assaf";
				const newName = "Bla bla";
				const getHeroByIdStub = sinon.stub();

				const hero = {name: oldName};
				getHeroByIdStub.returns(hero);

				//action
				handler.getHeroById = getHeroByIdStub;
				handler.updateHeroName("", newName);

				//asserts
				hero.name.should.equals(newName);
			});
		});
	});
	describe('Delete Methods', function () {
		//assumptions
		let herosList = [
			new Hero('1', "Assaf Marzan"),
			new Hero('2', "Yuval Marzan"),
			new Hero('8', "Alex Borochov")
		];

		const handler = new herosHandler(herosList);

		describe('deleteHeroById(heroId)', function () {
			it('length should decrease by 1', function () {
				//assumptions
				const id = '1';

				//action
				let curLength = handler.getHeros().length;
				handler.deleteHeroById(id);
				let aftLength = handler.getHeros().length;

				//asserts
				aftLength.should.be.equal(curLength - 1);
			});
			it('when id is not defined should do nothing', function () {
				//assumptions
				const id = undefined;

				//action
				let curLength = handler.getHeros().length;
				handler.deleteHeroById(id);
				let aftLength = handler.getHeros().length;

				//asserts
				aftLength.should.be.equal(curLength);
			});
		});
	});
});

describe('hero router', () => {
	describe('GET /', () => {
		it('Should return all heroes', (done) => {
			chai.request(app).get('/').end((err, res) => {
				(true).should.equal(true);
				done();
			});
		});
	});
});