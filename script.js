'use strict';

function login(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    if (username === 'kelompok-4' && password === 'kelompok-4') {
        alert('Login berhasil');
    } else {
        alert('Login gagal');
    }
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
}

















function signup(e) {
    e.preventDefault();
    const username = document.getElementById('username-signup').value;
    const password = document.getElementById('password-signup').value;
    const email = document.getElementById('email').value;
    alert('Berhasil');
}