// Function to handle Excel calculations
function myExcelFuns() {
    const numberStr = document.getElementById('numbers').value;
    if (!numberStr) {
        alert("Please enter some numbers.");
        return;
    }

    // Convert the input string into an array of numbers
    const numbers = numberStr.split(' ').map(Number);

    // Check if any of the inputs are not valid numbers
    if (numbers.some(isNaN)) {
        alert("Please enter valid numbers separated by spaces.");
        return;
    }

    // Get the selected function
    const selectedFunction = document.querySelector('input[name="function"]:checked').value;
    let result;

    // Perform the calculation based on the selected function
    switch (selectedFunction) {
        case 'AutoSum':
            result = numbers.reduce((a, b) => a + b, 0);
            break;
        case 'Average':
            result = numbers.reduce((a, b) => a + b, 0) / numbers.length;
            break;
        case 'Max':
            result = Math.max(...numbers);
            break;
        case 'Min':
            result = Math.min(...numbers);
            break;
        default:
            result = "Invalid function selected";
    }

    // Display the result
    document.getElementById('result').innerText = `Result: ${result}`;
}

// Attach event listener to the Calculate button
document.getElementById('calculate-button').addEventListener('click', myExcelFuns);