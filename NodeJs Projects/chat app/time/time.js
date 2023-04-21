const gettime = () => {
    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes()
    const send = `${hour}:${minute}`;
    console.log(send);
}
gettime();