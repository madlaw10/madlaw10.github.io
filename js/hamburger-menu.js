function toggleHideMenu(element) {
    element.classList.toggle('hide')
}
function toggleCrossBars(element) {
    element.classList.toggle('cross')
}
function toggleNavMenuOnClick(element) {
    element.addEventListener('click', function() {
      toggleCrossBars(this)
      toggleHideMenu(document.querySelector('.hamburger-menu__nav'))
    })
}
toggleNavMenuOnClick(document.querySelector('.hamburger-menu'))
