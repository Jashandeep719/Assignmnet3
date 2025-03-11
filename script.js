// Function to handle user info submission
function getUserInfo() 
{
    const firstName = document.getElementById('first-name').value;
    const lastName = document.getElementById('last-name').value;
    const email = document.getElementById('email').value;
    const address = document.getElementById('address').value;
    const city = document.getElementById('city').value;
    const province = document.getElementById('province').value;
    const membership = document.querySelector('input[name="membership"]:checked').value;

    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = `
        Full Name: ${firstName} ${lastName}<br>
        Email: ${email}<br>
        Address: ${address}<br>
        City: ${city}<br>
        Province: ${province}<br>
        Membership: ${membership}
    `;
}

// Function to handle Excel calculations
function myExcelFuns() {
    const numberStr = document.getElementById('numbers').value;
    if (!numberStr) {
        alert("Please enter some numbers.");
        return;
    }

    const numbers = numberStr.split(' ').map(Number);
    const selectedFunction = document.querySelector('input[name="function"]:checked').value;
    let result;

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
    }

    document.getElementById('result').innerText = `Result: ${result}`;
}

// Event listeners
document.getElementById('send-button').addEventListener('click', getUserInfo);
document.getElementById('calculate-button').addEventListener('click', myExcelFuns);