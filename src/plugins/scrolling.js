
let inHeader = document.querySelector('header');
window.addEventListener('scroll', function () {
    let value = window.scroll;
    console.log("scroll", value);
    if (value === true) {
        inHeader.style.animation = 'inout';
    }
});