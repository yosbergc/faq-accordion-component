let question = document.querySelectorAll('.questionContainer');
question.forEach((element, elementIndex) => {
    element.addEventListener('click', () => {
        let image = question[elementIndex].children[0].children[1];
        question[elementIndex].children[1].classList.toggle('hide');
        if (image.getAttribute('src') == 'assets/images/icon-plus.svg') {
            image.setAttribute('src', 'assets/images/icon-minus.svg')
        } else {
            image.setAttribute('src', 'assets/images/icon-plus.svg')
        }
    })
})