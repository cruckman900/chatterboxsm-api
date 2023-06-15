require('dotenv').config({ debug: true });

const fs = require('fs');
const http = require('http');
const https = require('https');
const express = require('express');
const subdomain = require('express-subdomain');
const cors = require('cors');
const helmet = require('helmet');

const app = express();
const router = express.Router();

const hostname = process.env.hostname;
const port = process.env.port;

/* Require Routing files */
const usersRouter = require('./routes/users/users');
const foodsRouter = require('./routes/users/foods');
const moviesRouter = require('./routes/users/movies');
const musicRouter = require('./routes/users/music');
const activitiesRouter = require('./routes/users/activities');
// const technicalRouter = require('./routes/users/technical');
// const systemsettingsRouter = require('./routes/users/systemsettings');
// const suggestionsRouter = require('./routes/users/suggestions');
// const donationsRouter = require('./routes/users/donations');
// const groupsRouter = require('./routes/groups/groups');
// const communitiesRouter = require('./routes/communities/communities');

app.use(subdomain('api', router));
app.use(cors());
app.use(helmet());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'https://chatterboxsm.com');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

/* Request Routing */
app.get("/", (req, res) => {
    res.json({ message: "Visit https://chatterboxsm.com" });
});
app.use("/users", usersRouter);
app.use("/foods", foodsRouter);
app.use("/movies", moviesRouter);
app.use("/music", musicRouter);
app.use("/activities", activitiesRouter);
// app.use("/technical", technicalRouter);
// app.use("/systemsettings", systemsettingsRouter);
// app.use("/suggestions", suggestionsRouter);
// app.use("/donations", donationsRouter);
// app.use('/groups', groupsRouter);
// app.use('/communities', communitiesRouter);

/* Error handler middleware */
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ message: err.message, stack: err.stack });
    return;
});

/* SSL certs */
const httpsOptions = {
    cert: fs.readFileSync(process.env.cert),
    ca: fs.readFileSync(process.env.ca),
    key: fs.readFileSync(process.env.key)
};


/* Create Servers */
const httpServer = http.createServer(app);
const httpsServer = https.createServer(httpsOptions, app);


/* Listen for Requests */
httpServer.listen();

httpsServer.listen(port, hostname, () => {
    console.log(`HTTPS Server running at https://api.chatterboxsm.com:${port};`);
});