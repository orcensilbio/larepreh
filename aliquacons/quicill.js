function print_menu(options) {
    // Check if options is an array
    if (!Array.isArray(options)) {
        console.log("Invalid input: options should be an array.");
        return;
    }

    // Iterate over the options array and print each option
    for (let i = 0; i < options.length; i++) {
        console.log(`${i + 1}. ${options[i]}`);
    }
}

// Example usage:
const menuOptions = ["Option 1", "Option 2", "Option 3", "Option 4"];
print_menu(menuOptions);
