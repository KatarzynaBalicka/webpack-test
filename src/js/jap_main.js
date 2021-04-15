
const hamburger = document.querySelector('.hamburger--js')

hamburger.addEventListener('click', () => {
    const navigation = document.querySelector('.navigation_top--js');
    navigation.classList.toggle('navigation--open')
})

// const menuBtn = document.querySelector('.menu-ham');
// let menuOpen = false;
// menuBtn.addEventListener('click', () => {
//     if(!menuOpen) {
//         menuBtn.classList.add('open');
//         menuOpen = true;
//     }
//     else {
//         menuBtn.classList.remove('open')
//     menuOpen= false;
    
//     }
// })