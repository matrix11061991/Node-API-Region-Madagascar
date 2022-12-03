//L'application requiert l'utilisation du module Express.
//La variable express nous permettra d'utiliser les fonctionnalités du module Express.  
var express = require('express'); 
let regions =  require('./mes-region');
// Nous définissons ici les paramètres du serveur.
var bodyParser = require("body-parser");

var hostname = 'localhost'; 
var port = 3000; 
// Nous créons un objet de type Express. 
var app = express(); 
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//Afin de faciliter le routage (les URL que nous souhaitons prendre en charge dans notre API), nous créons un objet Router.
//C'est à partir de cet objet myRouter, que nous allons implémenter les méthodes. 
var myRouter = express.Router(); 
// route('/api/regions/:id')
myRouter.route('/api/regions/:id')
// GET
.get(function(req,res){ 
	const id = parseInt(req.params.id)
	const region =  regions.find(region=>region.id === id)
	res.json({region:region})
});

// Nous demandons à l'application d'utiliser notre routeur
app.use(myRouter);  
// Démarrer le serveur 
app.listen(port, hostname, function(){
	console.log("Mon serveur fonctionne sur http://"+ hostname +":"+port); 
});
