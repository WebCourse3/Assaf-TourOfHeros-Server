
import express = require('express')
import { Request } from 'express';
import { Response } from 'express';

let herosRouter = express.Router()
let herosHandler = require('../global/objects').herosHandler;
let bodyParser = require('body-parser')


//router settings
herosRouter.use( bodyParser.json() );       // to support JSON-encoded bodies
herosRouter.use(bodyParser.urlencoded({     // to support URL-encoded bodies
	extended: true
}));

// middleware that is specific to this router
herosRouter.use(function timeLog (req: Request , res: Response, next) {
	console.log('Hero Time: ', Date.now())
	next()
})

herosRouter.route('/')
	.get(function (req: Request, res) {
	res.json(herosHandler.getHeros());
})
	.post(function(req: Request, res: Response)
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
	.delete(function(req: Request,res: Response)
		{
			let heroName = req.query.name;
			herosHandler.deleteHeroByName(heroName)
			res.json({message: "hero deleted"});
		}
	)

herosRouter.route('/:id')
	.get(function (req: Request, res: Response) {
		let heroId = req.params.id;
		res.json(herosHandler.getHeroById(heroId));
	})
	.put(function (req: Request, res: Response) {
		let heroId = req.params.id;
		let heroNewName = req.query.heroName;

		if (herosHandler.heroExists(heroId)) {
			herosHandler.updateHeroName(heroId, heroNewName)
			res.json({message: "hero updated successfuly"});
		} else {
			res.json({message: "hero wasn't found"});
		}
	})
	.delete(function(req: Request,res: Response)
		{
			let heroId = req.params.id;
			herosHandler.deleteHeroById(heroId)
			res.json({message: "hero deleted"});
		}
	)

export = herosRouter;
