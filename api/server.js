const express = require('express');
const path = require('path');
const app = express();
port = 3090;

const userlist = [];
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // for REST request body;
app.use(express.static(path.join(__dirname, '../ui/dist')));

app.get('/api/user', (req, res) => {
    console.log('get user api called');
    res.json(userlist);
})

app.post('/api/user', (req, res) => {
    const requestUserData = req.body.user;
    console.log('Adding user', requestUserData);
    if (requestUserData) {
        userlist.push(requestUserData);
        res.json("OK");
    } else {
        userlist.push(requestUserData);
        res.json("Error");
    }
})

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, '../ui/dist/index.html'));
});

app.listen(port, () => {
    console.log(`Server listening on the port number ${port}`);
});