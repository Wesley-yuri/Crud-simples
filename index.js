const express = require('express');
const server = express();
server.use(express.json());
const geeks = [];

//--------------------------

server.get('/geeks', (req, res) => {
    return res.json(geeks);
    })

//---------------------------
interface:
checkUserInArray = []
server.get('/geeks/:index', checkUserInArray, (req, res) => {
    return res.json(req.user);
    });

//----------------------------

server.post('/geeks', (req, res) => {
    const { name } = req.body;
    geeks.push(name);

    return res.json(geeks);
    
    })

    server.put('/geeks/:index', (req, res) => {
        const { index } = req.params; // recupera o index com os dados
        const { name } = req.body;
    })

    server.delete('/geeks/:index', (req, res) => {
        const { index } = req.params; // recupera o index com os dados
        
        geeks.splice(index, 1);

        return res.send();
})

    server.listen(3000);