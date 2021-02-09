const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();

const ygoroot = 'https://db.ygoprodeck.com/api/v7/cardinfo.php';
const PORT = 3001;

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

// Gets cards relative to given name
app.get('/api/cards/:fname', (request, response) => {
    let filteredArr = [];
    console.log(`hit searching cards ${ygoroot}?fname=${request.params.fname}`);
    axios.get(`${ygoroot}?fname=${request.params.fname}`, {
        method: 'get'
    }).then(res => {
        filteredArr = res.data["data"].slice(0,100)
                console.log(filteredArr);

        return response.json({
            cards: filteredArr
        });
    }).catch(e => {
        console.log(e);
        return response.send(e);
    });
    return
});

// gets all cards
app.get('/api/cards', (request, response) => {
    let filteredArr = [];
    axios.get(ygoroot, {
        method: 'get',
        url: `${ygoroot}`,
    }).then(res => {
        filteredArr = res.data["data"].slice(0,100)
        return response.json({
            cards: filteredArr
        });
    }).catch(e => {
        console.log(e);
        return response.send(e);
    });
    return
});

app.get('/', (request, response) => {
    return response.send('Receieved a Get request');
});

app.post('/', () => {
    return response.send('Receieved a POST request');
});

app.put('/dashboard/:uid', (request, response) => {
    return response.send(`PUT method being called ${request.params.uid}`);
});

var listener = app.listen(PORT, function () {
   console.log('Server started on port %d', listener.address().port);
});

