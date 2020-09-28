const express = require('express');
const app = express();
const path = require('path');

app.use((req, res, next) => {
	console.log(req.method, req.url);
	next();
});

const index = (req, res) => {
	res.sendFile('src/index.html', { root: __dirname });
};
app.get('/', index);
app.get('/index.html', index);


app.get('/src/*', (req, res) => {
	res.sendFile(req.path, { root: __dirname });
});

const publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));

app.get('/*', (req, res) => {
	res.sendFile('src/404.html', { root: __dirname });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(` ~ Listening at http://localhost:${PORT}`));

