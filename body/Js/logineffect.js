let login1 = document.getElementById('login');
let register1 = document.getElementById('register');
let form_box = document.getElementsByClassName('form-box')[0];
let register_box = document.getElementsByClassName('Register')[0];
let login_box = document.getElementsByClassName('SignIn')[0];

register1.addEventListener('click', () => {
    form_box.style.transform = 'translateX(80%)';
    login_box.classList.add('hidden');
    register_box.classList.remove('hidden');
})

login1.addEventListener('click', () => {
    form_box.style.transform = 'translateX(0%)';
    register_box.classList.add('hidden');
    login_box.classList.remove('hidden');
})