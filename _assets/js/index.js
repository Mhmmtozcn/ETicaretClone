
let menü = document.querySelector('.header__flex-bars');
let category = document.querySelector('.header__flex-category')

menü.addEventListener("click", function () {
    category.classList.toggle("active")
})