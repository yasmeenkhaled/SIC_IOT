// Task 1: Message Processing Function
function processMessage(msg) {
    if (msg.temperature > 30) {
        msg.status = "High";
    } else {
        msg.status = "Normal";
    }
    return msg;
}

// Task 2: String Manipulation Function
function manipulateString(input) {
    let result = input.toUpperCase();
    if (input.length > 10) {
        result += " (truncated)";
    }
    return result;
}

// Task 3: Filter Sensor Data Function
function filterSensorData(reading, threshold = 10) {
    if (reading < threshold) {
        return null;
    }
    return reading;
}

// Task 4: Time-Based Greeting Function
function getTimeBasedGreeting() {
    const hours = new Date().getHours();
    if (hours < 12) {
        return "Good morning";
    } else if (hours < 18) {
        return "Good afternoon";
    } else {
        return "Good evening";
    }
}

// Task 5: Combine Sensor Data Function
function combineSensorData(temp, humidity) {
    return { temperature: temp, humidity: humidity };
}

// Task 6: Timestamp Addition Function
function addTimestamp(msg) {
    const now = new Date();
    const timestamp = now.toISOString().replace('T', ' ').substring(0, 19); // YYYY-MM-DD HH:MM:SS format
    msg.timestamp = timestamp;
    return msg;
}

// Task 7: Dynamic Property Access Function
function accessDynamicProperty(msg) {
    const propertyName = msg.propertyName;
    return msg.payload[propertyName];
}

// Running All Test Cases
console.log("Message Processing Test:", processMessage({ temperature: 32, humidity: 60 }));  
// Expected Output: { temperature: 32, humidity: 60, status: 'High' }

console.log("Message Processing Test:", processMessage({ temperature: 25, humidity: 50 }));  
// Expected Output: { temperature: 25, humidity: 50, status: 'Normal' }

console.log("String Manipulation Test:", manipulateString("hello world"));  
// Expected Output: "HELLO WORLD (truncated)"

console.log("String Manipulation Test:", manipulateString("iot"));  
// Expected Output: "IOT"

console.log("Filter Sensor Data Test:", filterSensorData(5));  
// Expected Output: null

console.log("Filter Sensor Data Test:", filterSensorData(15));  
// Expected Output: 15

console.log("Time-Based Greeting Test:", getTimeBasedGreeting());  
// Expected Output: "Good morning", "Good afternoon", or "Good evening" depending on the current time

console.log("Combine Sensor Data Test:", combineSensorData(25, 60));  
// Expected Output: { temperature: 25, humidity: 60 }

console.log("Timestamp Addition Test:", addTimestamp({ temperature: 22, humidity: 60 }));  
// Expected Output: Object with timestamp: { temperature: 22, humidity: 60, timestamp: 'YYYY-MM-DD HH:MM:SS' }

console.log("Dynamic Property Access Test:", accessDynamicProperty({ payload: { temperature: 22, humidity: 60 }, propertyName: 'temperature' }));  
// Expected Output: 22

console.log("Dynamic Property Access Test:", accessDynamicProperty({ payload: { temperature: 22, humidity: 60 }, propertyName: 'humidity' }));  
// Expected Output: 60
