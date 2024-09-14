function getGreeting() {
    let hours = new Date().getHours();
    if (hours < 12) {
        return "Good morning";
    } else if (hours < 18) {
        return "Good afternoon";
    } else {
        return "Good evening";
    }
}

// Example usage
console.log(getGreeting());
