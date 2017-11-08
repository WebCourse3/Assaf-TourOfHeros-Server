var express = require('express')
var herosRouter = express.Router()
var herosHandler = require('../global/objects').herosHandler;
var bodyParser = require('body-parser')


//router settings
herosRouter.use( bodyParser.json() );       // to support JSON-encoded bodies
herosRouter.use(bodyParser.urlencoded({     // to support URL-encoded bodies
	extended: true
}));

// middleware that is specific to this router
herosRouter.use(function timeLog (req, res, next) {
	console.log('Hero Time: ', Date.now())
	next()
})

herosRouter.route('/')
	.get(function (req, res) {
	res.json(herosHandler.getHeros());
})
	.post(function(req,res)
		{
			let heroId = req.body.id;
			let heroName = req.body.name;

			if(!herosHandler.heroExists(heroId)) {
				herosHandler.addHero(heroId, heroName);
				res.json({message: "added new hero"});
			} else {
				res.json({message: "hero with specified id already exists"});
			}
		}
	)
	.delete(function(req,res)
		{
			let heroName = req.query.name;
			herosHandler.deleteHeroByName(heroName)
			res.json({message: "hero deleted"});
		}
	)

herosRouter.route('/:id')
	.get(function (req, res) {
		let heroId = req.params.id;
		res.json(herosHandler.getHeroById(heroId));
	})
	.put(function (req, res) {
		let heroId = req.params.id;
		let heroNewName = req.query.heroName;

		if (herosHandler.heroExists(heroId)) {
			herosHandler.updateHeroName(heroId, heroNewName)
			res.json({message: "hero updated successfuly"});
		} else {
			res.json({message: "hero wasn't found"});
		}
	})
	.delete(function(req,res)
		{
			let heroId = req.params.id;
			herosHandler.deleteHeroById(heroId)
			res.json({message: "hero deleted"});
		}
	)

module.exports = herosRouter;
