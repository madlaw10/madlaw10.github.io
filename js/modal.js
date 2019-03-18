function displayProjectImage(element) {
    element.classList.remove('modal')
}
function displayProjectImageOnClick(element) {
    element.addEventListener('click', function () {
        displayProjectImage(this.previousElementSibling)
    })
}
function displayProjectImageOnClickAny(elements) {
    elements.forEach((element) => {
        displayProjectImageOnClick(element)
    })
}
displayProjectImageOnClickAny(document.querySelectorAll('.project__header'))

function hideProjectImage(element) {
    element.classList.add('modal')
}
function hideProjectImageOnClick(element) {
    element.addEventListener('click', function () {
        hideProjectImage(this)
    })
}
function hideProjectImageOnClickAny(elements) {
    elements.forEach((element) => {
        hideProjectImageOnClick(element)
    })
}
hideProjectImageOnClickAny(document.querySelectorAll('.project__image'))