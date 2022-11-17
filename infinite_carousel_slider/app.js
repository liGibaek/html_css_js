const carousel = document.querySelector('.carousel');
const slider = document.querySelector('.slider');

const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let direction = 0;

next.addEventListener('click', () => {
    if (direction === 1) {
        slider.prepend(slider.lastElementChild);
    }
    direction = -1;
    carousel.style.justifyContent = 'flex-start';
    slider.style.transform = 'translate(-20%)';
})
prev.addEventListener('click', () => {
    if (direction === -1) {
        slider.appendChild(slider.firstElementChild);
    }
    direction = 1;
    carousel.style.justifyContent = 'flex-end';
    slider.style.transform = 'translate(20%)';
})

slider.addEventListener('transitionend', () => {
    if (direction === -1) {
        slider.appendChild(slider.firstElementChild);
    } else if (direction === 1) {
        slider.prepend(slider.lastElementChild);
    }

    slider.style.transition = 'none';
    slider.style.transform = 'translate(0)';
    setTimeout(() => slider.style.transition = 'all 0.5s');
})