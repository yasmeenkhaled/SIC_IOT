function processMessage(msg) {
    let temperature = msg.temperature;
    if (temperature > 30) {
        msg.status = "High";
    } else {
        msg.status = "Normal";
    }
    return msg;
}

let sensorData = { temperature: 32, humidity: 50, device: "sensor1" };
console.log(processMessage(sensorData));
