
const users = [
    { username: 'test', password: '1234', age: 25 }
];

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;

    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        alert('Login successful!');
        document.getElementById('login-container').style.display = 'none';
        document.getElementById('welcome-container').style.display = 'block';
    } else {
        alert('Invalid credentials');
    }
}

function showRegisterForm() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
}

function register() {
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;
    const age = document.getElementById('register-age').value;

    if (username && password && age) {
        users.push({ username, password, age });
        alert('Registration successful!');
        document.getElementById('register-form').style.display = 'none';
        document.getElementById('login-form').style.display = 'block';
    } else {
        alert('Please fill in all fields');
    }
}

function makeGetRequest() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
        .then(response => response.json())
        .then(data => alert(`GET Response: ${JSON.stringify(data)}`))
        .catch(err => console.error(err));
}

function makePostRequest() {
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ title: 'foo', body: 'bar', userId: 1 })
    })
        .then(response => response.json())
        .then(data => alert(`POST Response: ${JSON.stringify(data)}`))
        .catch(err => console.error(err));
}
