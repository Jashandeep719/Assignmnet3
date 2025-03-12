document.addEventListener('DOMContentLoaded', function () {
    // Check which page is loaded
    if (document.getElementById('main-form')) {
        // Code for index.html (Home page)
        const sendButton = document.getElementById('send-button');
        const outputDiv = document.getElementById('output');

        sendButton.addEventListener('click', function () {
            const firstName = document.getElementById('first-name').value;
            const lastName = document.getElementById('last-name').value;
            const email = document.getElementById('email').value;
            const address = document.getElementById('address').value;
            const city = document.getElementById('city').value;
            const province = document.getElementById('province').value;
            const membership = document.querySelector('input[name="membership"]:checked').value;

            const formData = `
                <h3>Form Data:</h3>
                <p><strong>First Name:</strong> ${firstName}</p>
                <p><strong>Last Name:</strong> ${lastName}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Address:</strong> ${address}</p>
                <p><strong>City:</strong> ${city}</p>
                <p><strong>Province:</strong> ${province}</p>
                <p><strong>Membership:</strong> ${membership}</p>
            `;

            outputDiv.innerHTML = formData;
        });
    }

    if (document.getElementById('excel-form')) {
        // Code for excel.html (Excel page)
        const calculateButton = document.getElementById('calculate-button');
        const resultDiv = document.getElementById('result');

        calculateButton.addEventListener('click', function () {
            const numbersInput = document.getElementById('numbers').value;
            const selectedFunction = document.querySelector('input[name="function"]:checked').value;
            const numbersArray = numbersInput.split(' ').map(Number);

            if (numbersArray.some(isNaN)) {
                resultDiv.textContent = 'Please enter valid numbers separated by spaces.';
                return;
            }

            let result;
            switch (selectedFunction) {
                case 'AutoSum':
                    result = numbersArray.reduce((sum, num) => sum + num, 0);
                    break;
                case 'Average':
                    result = numbersArray.reduce((sum, num) => sum + num, 0) / numbersArray.length;
                    break;
                case 'Max':
                    result = Math.max(...numbersArray);
                    break;
                case 'Min':
                    result = Math.min(...numbersArray);
                    break;
                default:
                    result = 'Invalid function selected.';
            }

            resultDiv.textContent = result: ${result};
        });
    }
});