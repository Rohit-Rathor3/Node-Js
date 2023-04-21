const http = require("http");
const fs = require("fs");
var requests = require("requests");
const replaceVal = (tempVal, oriVal) => {
    let temperature = tempVal.replace("{%tempVal%}", oriVal.main.temp);
    temperature = temperature.replace("{%tempMin%}", oriVal.main.temp_min);
    temperature = temperature.replace("{%tempMax%}", oriVal.main.temp_max);
    temperature = temperature.replace("{%location%}", oriVal.name);
    temperature = temperature.replace("{%country%}", oriVal.sys.country);
    temperature = temperature.replace("{%statusCode%}", oriVal.weather[0].main)
    return temperature;
}

const homeFile = fs.readFileSync("D:/NODE JS/api/WeatherApi/index.html", "utf-8");

const server = http.createServer((req, res) => {
    if (req.url == "/") {
        requests(
                "https://api.openweathermap.org/data/2.5/weather?q=Gwalior&appid=cd6e222b668a365ced46fa618c95b152"
            )
            .on("data", (chunks) => {
                const objData = JSON.parse(chunks)
                const arrData = [objData];
                const realTimeData = arrData.map((val) => replaceVal(homeFile, val)).join("");
                res.write(realTimeData);
            })

        .on("end", (err) => {
            if (err)
                return console.log('connection error', err);
            res.end();
        })
    } else {
        res.writeHead(404, { "content-type": "text/html" });
        res.end("Page not found !");
    }
});

server.listen(8080, "127.0.0.1");