const express = require("express");
require("./config/db");
const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`listenning at ${PORT}`);
})