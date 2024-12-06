// Contact form validation
function validateForm() {
    // Get form field values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Check if all fields are filled
    if (!name || !email || !message) {
        alert("Please fill out all fields.");
        return false; // Prevent form submission
    }

    // Basic email validation (simple regex pattern for email format)
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false; // Prevent form submission
    }

    // If everything is okay, submit the form
    alert("Form submitted successfully!");
    return true; // Allow form submission
}