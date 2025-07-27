let cartCount = 0

const cartCounter = document.getElementById('card__count')
const addToCardBucket = document.querySelectorAll('.card__bucket')

addToCardBucket.forEach(button => {
    button.addEventListener("click", () => {
        cartCount++;
        cartCounter.textContent = cartCount
    })
});


const burgerBtn = document.querySelector('.burger')
const navMenu = document.querySelector('.nav__menu__list')
const burgerAnimation1 = document.querySelector('.burgerAnimation1')
const burgerAnimation2 = document.querySelector('.burgerAnimation2')
const burgerAnimation3 = document.querySelector('.burgerAnimation3')


burgerBtn.addEventListener('click', () => {
    navMenu.classList.toggle('active')
    burgerAnimation1.classList.toggle('active')
    burgerAnimation2.classList.toggle('active')
    burgerAnimation3.classList.toggle('active')

})