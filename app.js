const fs = require('fs');
const https = require('https');
const express = require('express');
const cors = require('cors');

const hostname = 'chatterboxsm.com';

const port = 443;

const httpsOptions = {
    cert: fs.readFileSync('../ssl/chatterboxsm_com_bc628_1eabf_1713225599_75050718bfe1dcd31d8344ee1288ccd0.crt'),
    ca: fs.readFileSync('../ssl/chatterboxsm.ca-bundle'),
    key: fs.readFileSync('../ssl/bc628_1eabf_67882214ef7f1f520fb7b66e099e742c.key')
};

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true, }));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'https://chatterboxsm.com');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.setHeader('Acces-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get("/", (req, res) => {
    res.json({ message: "ok "});
});

/* Error handler middleware */
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ message: err.message });
    return;
});

const httpsServer = https.createServer(httpsOptions, app);

// Application Code HERE
/* _____________________________________________________________________________________________________________ */

// app.get("/", (req, res) => {
//     res.json({ message: "ok" });
// });

/* _____________________________________________________________________________________________________________ */

httpsServer.listen(port, hostname);