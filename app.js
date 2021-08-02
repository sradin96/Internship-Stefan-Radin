const mobileBtn = document.getElementById('burger-menu');
const nav = document.querySelector('nav');
const mobileBtnExit = document.getElementById("burger-menu-exit");

mobileBtn.addEventListener('click', () => {
    nav.classList.add('show-menu');
})

mobileBtnExit.addEventListener('click', () => {
    nav.classList.remove('show-menu');
})