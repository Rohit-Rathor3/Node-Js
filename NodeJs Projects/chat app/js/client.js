const socket = io('http://localhost:8000');
// Get dom elements in respected js variable
const name = prompt("Enter your name");
const form = document.getElementById('send-container');
const messageInput = document.getElementById('messageInp');
const messageContainer = document.querySelector(".container");
var getOnline = document.getElementById('online');
var audio = new Audio("ring.mp3");
// get current time
function sendTime() {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes()
    const Time = `${hour}:${minute}`;
    return Time;
}

// function to append the information in containert

const append = async(message, position) => {
    const messageElement = document.createElement('div');
    const timeSection = document.createElement('div');
    messageElement.innerText = await message;
    timeSection.innerText = sendTime();
    messageElement.classList.add('message');
    messageElement.classList.add(position);
    timeSection.classList.add('timeSection');
    messageElement.append(timeSection);
    messageContainer.append(messageElement);


    if (position == 'left')
        audio.play();
}

// ask new user to his / her name

//var online = 0;

socket.emit('new-user-joined', name);
socket.emit('totalOnline', name);

// if the new user joined , let the server know
socket.on('user joined', (name) => {
    // online += 1;
    append(`${name} joined the chat `, 'join');
    //join.classList.add('center');
})

socket.on('totaljoined', online => {
    getOnline.innerHTML = `${online}`;
})

// if server send a message , receive it

socket.on('receive', data => {
    append(`${data.name}:${data.message}`, 'left');
})

// if a user left the chat, let the know others people

socket.on('left', naam => {
    append(`${naam} left the chat`, 'leave');
})

// if the forms get submitted, send server a message
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const message = messageInput.value;
    append(`You: ${message}`, 'right');

    socket.emit('send', message);
    messageInput.value = ' ';

})