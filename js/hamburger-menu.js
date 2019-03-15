function toggleCrossBars(element) {
    element.classList.toggle('cross')
}
function toggleCrossBarsOnClick(element) {
    element.addEventListener('click', function() {
      toggleCrossBars(this)
    })
}
toggleCrossBarsOnClick(document.querySelector('.hamburger-menu'))