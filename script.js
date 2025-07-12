// Wait for the document to fully load
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    form.addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent the form from submitting the traditional way

        // Clear any previous message
        formMessage.textContent = '';
        formMessage.classList.remove('success', 'error');
        
        // Get the form values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Simple form validation
        if (name === '' || email === '' || message === '') {
            formMessage.textContent = 'All fields are required.';
            formMessage.classList.add('error');
        } else if (!validateEmail(email)) {
            formMessage.textContent = 'Please enter a valid email address.';
            formMessage.classList.add('error');
        } else {
            formMessage.textContent = 'Thank you for your message! We will get back to you soon.';
            formMessage.classList.add('success');

            // Reset the form after successful submission
            form.reset();
        }
    });

    // Function to validate email format
    function validateEmail(email) {
        const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return regex.test(email);
    }
});