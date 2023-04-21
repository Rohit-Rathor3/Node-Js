/* NOde js has built-in module called "Events",
where we can create ,fire and listen for our own events .
1. Registering for the event to be fired omly one time using once.
2. Create an event emitter instance and register a couple of callbacks.
3. Registring for the event with callback parameters */
// 1.
const EventEmitter = require("events"); // this EventEmitter is a class , fiert latter should be Captal letter
const event = new EventEmitter();
event.on("Greet", () => {
    console.log("Hlo,node.js");
})

// 2.
// event emitter instance , i have created at last
// cretaing couple of callbacks 
event.on("Greet", () => {
    console.log("callback1");
})
event.on("Greet", () => {
    console.log("callback2");
})
event.on("Greet", () => {
    console.log("callback3");
})

// 3. 
// creting callback with parameter

event.on("Greet", (name) => {
    console.log(`This is Parameter Callback, hi ${name}`);
});
// we have to define callbacks before event emitter. this is exception, OK.
event.emit("Greet", "Rohit Bhai"); // event emitter with custom event name.