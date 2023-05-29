const dotenv = require('dotenv').config();

const express = require("express");
const cors = require("cors");
const app = express();
const port = 4000;

const usersRouter = require("./routes/users/users");

app.use(cors());
app.use(express.json());

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.setHeader('Acces-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.get("/", (req, res) => {
    res.json({ message: "ok" });
});

// Application Code HERE
/* _____________________________________________________________________________________________________________ */

app.use("/users", usersRouter);

/* _____________________________________________________________________________________________________________ */

/* Error handler middleware */
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ message: err.message });
    return;
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});