function toggleAboutMe(element) {
    element.classList.toggle('hide')
}
function toggleAboutMeOnClick(element) {
    element.addEventListener('click', function () {
        toggleAboutMe(this.parentElement.nextElementSibling.nextElementSibling.nextElementSibling)
    })
}
toggleAboutMeOnClick(document.querySelector('.toggle-button'))