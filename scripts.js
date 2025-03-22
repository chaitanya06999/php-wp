document.getElementById('visaForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value.trim();
    const passport = document.getElementById('passport').value.trim();
    const country = document.getElementById('country').value;
    let message = document.getElementById('message');
    message.classList.remove('error', 'success');
    message.textContent = '';

    if (!name || !passport || !country) {
        message.textContent = "All fields are required!";
        message.classList.add('error');
        return;
    }

    if (passport.length < 8 || passport.length > 10) {
        message.textContent = "Invalid passport number!";
        message.classList.add('error');
        return;
    }

    message.textContent = "Visa application submitted successfully!";
    message.classList.add('success');
});
