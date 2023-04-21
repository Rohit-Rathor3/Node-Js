const express = require("express");
const app = express();
require("./db/conn.js");

const port = 8000;

app.listen(port, () => {
    console.log(`lostening at ${port}`);
})