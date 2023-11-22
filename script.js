document.getElementById('registration-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
    const college = document.getElementById('college').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('Passwords do not match');
        return;
    }

    window.location.href = 'registration_confirmation.html?name=' + encodeURIComponent(name) +
                            '&email=' + encodeURIComponent(email) +
                            '&mobile=' + encodeURIComponent(mobile) +
                            '&college=' + encodeURIComponent(college) +
                            '&password=' + encodeURIComponent(password);
});



