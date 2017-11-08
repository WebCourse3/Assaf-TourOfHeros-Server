import express = require('express')
import { Request } from 'express';
import { Response } from 'express';

var router = express.Router()

//other routes
var heros = require('./herosRoute')

//configure other routes
router.use('/heros', heros)

//router routes
router.use(function timeLog (req: Request, res: Response, next) {
	console.log('Time: ', Date.now())
	next()
})

router.get('/', function (req: Request, res: Response) {
	res.send('Home page')
})

export = router;
