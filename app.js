let navElement = document.querySelector('ul');
let tooglBtn = document.querySelector('.toogle-btn');

tooglBtn.addEventListener('click', ()=>{
    navElement.classList.toggle('change-element');
})