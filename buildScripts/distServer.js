/*eslint-disable no-console */
import express from 'express';
import compression from 'compression';
import path from 'path';
import open from 'open';


const PORT = 3000;

let app = express();

app.use(compression());
app.use(express.static('dist'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(PORT, err => {
    if (err) {
        console.log(err);
    }
    else {
        open('http://localhost:' + PORT);
    }
});
