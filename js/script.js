document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('welcome-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;

        if (name && email) {
            document.getElementById('welcome-screen').style.display = 'none';
        } else {
            alert('Por favor, ingresa tu nombre y correo electrónico.');
        }
    });
});
