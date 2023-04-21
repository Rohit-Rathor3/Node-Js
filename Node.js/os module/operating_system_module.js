/* Node.js OS provide some basic operating system related utility functions */
/* There are many methods i cannot explain each, here below are few of them explained.
let os = require("os");
// 1. os.arch()-> used to fetch the operating system CPU architecture
let CpuArchitecture = os.arch();
console.log(CpuArchitecture);

//2. os.cpus()-> informationm about each cpu/core installed : model , speed(in Mhz) , time
let cpuInfo = os.cpus();
console.log(cpuInfo);

//3. os.freemem() -> it returns the amount of free system memory in bytes.
let freemem = os.freemem();
console.log(freemem / 1024 / 1024 / 1024);

//4. homedir()-> it returns the home directory of the current user
let dir = os.homedir();
console.log(dir);

//5. hostname()-> it returns hostname of operating system
let hname = os.hostname();
console.log(hname);

//6. networkinterfaces()-> It returns a list of network interfaces
let network = os.networkInterfaces();
console.log(network);