const dotenv = require('dotenv').config({ debug: true });

const fs = require('fs');
const http = require('http');
const https = require('https');
const express = require('express');
const subdomain = require('express-subdomain');
const cors = require('cors');
const helmet = require('helmet');

const hostname = process.env.hostname;
const port = process.env.port;

const httpsOptions = {
    cert: fs.readFileSync(process.env.cert),
    ca: fs.readFileSync(process.env.ca),
    key: fs.readFileSync(process.env.key)
};

const router = express.Router();
const app = express();

const usersRouter = require("./routes/users/users");

app.use(subdomain('api', router));

app.use(cors());
app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: true, }));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'https://chatterboxsm.com');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

/* Error handler middleware */
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ message: err.message, stack: err.stack });
    return;
});

// Application Code HERE
/* _____________________________________________________________________________________________________________ */

app.get("/", (req, res) => {
    res.json({ message: "I love you, Alexa!!" });
});

app.use("/users", usersRouter);

/* _____________________________________________________________________________________________________________ */

const httpServer = http.createServer(app);
const httpsServer = https.createServer(httpsOptions, app);

httpServer.listen();

httpsServer.listen(port, hostname, () => {
    console.log(`HTTPS Server running at ${hostname}:${port}`);
});