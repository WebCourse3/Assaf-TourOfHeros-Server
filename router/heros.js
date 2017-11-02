var express = require('express')
var herosRouter = express.Router()

// middleware that is specific to this router
herosRouter.use(function timeLog (req, res, next) {
	console.log('Hero Time: ', Date.now())
	next()
})

herosRouter.get('/', function (req, res) {
	res.send('heros home page')
})


module.exports = herosRouter;