function login() {
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    if (email === '' || password === '') {
        alert('Please fill in all fields');
        return;
    }

    alert(`Logged in with email: ${email}`);
    
    // send the email and password to the server
}

function signup() {
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;

    if (email === '' || password === '') {
        alert('Please fill in all fields');
        return;
    }

    alert(`Signed up with email: ${email}`);
    
}
