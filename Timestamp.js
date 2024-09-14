function addTimestamp(msg) {
    let timestamp = new Date().toISOString().replace('T', ' ').split('.')[0];
    msg.timestamp = timestamp;
    return msg;
}

let message = { temperature: 22 };
console.log(addTimestamp(message));
