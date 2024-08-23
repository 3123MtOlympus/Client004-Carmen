document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Get the values from the form fields
        const name = document.getElementById("name").value;
        const number = document.getElementById("number").value;
        const email = document.getElementById("email").value;

        // Example: Log the values to the console
        console.log("Name:", name);
        console.log("Phone Number:", number);
        console.log("Email:", email);

        // Example: Send the data to a server or an API
        // Replace the URL with your server endpoint
        fetch('https://your-server-endpoint.com/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                number: number,
                email: email
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert('Subscription successful!');  // Display success message
            form.reset();  // Reset the form fields
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Subscription failed. Please try again.');  // Display error message
        });
    });
});
