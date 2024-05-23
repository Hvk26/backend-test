import express from 'express';
// require('dotenv').config();

const app = express();
// const PORT = process.env.PORT;
const PORT = 4000;

//Dataset for the serving api
const pokemon = [

    {
        id:1,
        name:"Pikachu",
        type: "Lightining",
        power: "76xp",
        agility:"90ap"
    },
    {
        id:2,
        name:"Bulbasaur",
        type: "Forest",
        power: "67xp",
        agility:"50ap"
    },
    {
        id:3,
        name:"Charizard",
        type: "Fire",
        power: "89xp",
        agility:"77ap"
    },
    {
        id:4,
        name:"Blastoise",
        type: "Water",
        power: "85xp",
        agility:"70ap"
    },
    {
        id:5,
	    name:"Magmar",
	    type:"fire",
	    power:"87xp",
	    agility:"77ap"
    },
    {
        id:6,
	    name:"Lugia",
	    type:"rare",
	    power:"97xp",
	    agility:"99ap"
    }
]

app.get('/',(req, res)=>{
    res.send("app is running");
})

app.get('/api/pokemon',(req, res)=>{
    res.send(pokemon);
})

app.listen(PORT, ()=>{
    console.log("Server is running flawlessly");
})