function manipulateString(input) {
    if (input.length > 10) {
        return input.substring(0, 10).toUpperCase() + "(truncated)";
    }
    return input.toUpperCase();
}

// Example usage
console.log(manipulateString("youdeservemorethanthat"));
