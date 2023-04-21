// This server will handle socket io connections
const io = require("socket.io")(8000, {
    cors: {
        origin: '*',
    }
});
const users = {};
var online = 0;

io.on('connection', socket => {
    // if any new user joins,let other users connected to the server know!
    socket.on('new-user-joined', (name) => {
        users[socket.id] = name;
        online++;
        socket.broadcast.emit('user joined', name);

    });
    socket.on('totalOnline', (name) => {
            users[socket.id] = name;
            socket.broadcast.emit('totaljoined', online);
        })
        // if someone sends a message , broadcast it to the others

    socket.on('send', message => {
        socket.broadcast.emit('receive', { message: message, name: users[socket.id] });
    });

    // if someone leaves the chat, let others know
    socket.on('disconnect', message => {
        online--;
        socket.broadcast.emit('left', users[socket.id]);
        delete users[socket.id];
    });
    console.log(users);
})