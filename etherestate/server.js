const express = require('express');
const bodyParser = require('body-parser');
const PORT = 8081 || process.env.PORT;
const app = express();
const { HousesList } = require('./housesList.json');
const cors = require('cors');
const user = require('./routes/user');

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname + '/dist'));
app.use('/user', user);
app.get('/houseslist', (req, res) => {
	res.send(HousesList);
});
app.get('/houseslist/:id', (req, res) => {
	res.send(HousesList[parseInt(req.params.id) - 1]);
});
app.get(/.*/, function(req, res) {
	res.sendFile(__dirname + '/dist/index.html');
});
app.listen(PORT);
console.log('Server started...');
console.log(`App running at:\n http://localhost:${PORT}/`);
