const express = require("express")
const app = express();
const path = require("path");
const port = 8080;

// defining static path
const staticPath = path.join(__dirname, "../public");
console.log(staticPath);

app.use(express.static(staticPath));

app.listen(port, () => {
    console.log(`Listening at ${port}`);
})