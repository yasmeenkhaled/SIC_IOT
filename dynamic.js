function dynamicPropertyAccess(msg, propertyName) {
    return msg.payload[propertyName];
}

// Example usage
let msg = { payload: { temperature: 25, humidity: 60 } };
console.log(dynamicPropertyAccess(msg, "temperature")); // Output: 25
console.log(dynamicPropertyAccess(msg, "humidity")); // Output: 60
