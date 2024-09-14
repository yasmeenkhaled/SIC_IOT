function combineSensorData(sensor1, sensor2) {
    return {
        temperature: sensor1.temperature,
        humidity: sensor2.humidity
    };
}

// Example usage
let tempSensor = { temperature: 25 };
let humSensor = { humidity: 60 };
console.log(combineSensorData(tempSensor, humSensor));
