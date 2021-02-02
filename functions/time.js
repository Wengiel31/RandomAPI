module.exports = () => {
    let now = new Date();
    let hour = now.getHours();
    if (hour < 10) {
        hour = `0${hour}`;
    }
    let minute = now.getMinutes();
    if (minute < 10) {
        minute = `0${minute}`;
    }
    let second = now.getSeconds();
    if (second < 10) {
        second = `0${second}`;
    }
    let day = now.getDate();
    if (day < 10) {
        day = `0${day}`;
    }
    let month = now.getMonth() + 1;
    if (month < 10) {
        month = `0${month}`;
    }
    let year = now.getFullYear();
    return `${hour}:${minute}:${second} ${day}.${month}.${year}.`;
}
