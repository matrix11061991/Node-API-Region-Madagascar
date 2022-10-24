const express = require('express')
let regions =  require('./mes-region')
//console.log(regions)
const app = express()
const port = 3000

app.get('/', (req,res)=>res.send('hello from main !!'))

app.get('/api/regions/:id', (req,res)=>{
	const id = parseInt(req.params.id)
	const region =  regions.find(region=>region.id === id)
	//console.log(region.name)
	res.json({region:region})
})
app.listen(port,()=>console.log('Serveur demare'))