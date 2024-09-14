function filterSensorData(reading, threshold) {
    return reading >= threshold ? reading : null;
}

// Example usage
console.log(filterSensorData(25, 30)); // Output: null
console.log(filterSensorData(35, 30)); // Output: 35
