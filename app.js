const express = require("express");
const app = express();
const port = 9000;
app.use(express.json());
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.get("/", (req, res) => {
    res.json({ message: "Can't wait to get on the... road again..." });
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});