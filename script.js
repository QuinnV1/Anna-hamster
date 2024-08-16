let slides = document.querySelectorAll('.slide');
let currentSlide = 0;
let sliderNavButtons = document.querySelectorAll('.slider-nav button');
let sliderIndicator = document.querySelector('.slider-indicator');
let intervalId;
let slideInterval = 4000; // Интервал переключения слайдов

function showSlide(n) {
    slides[currentSlide].style.display = 'none';
    sliderNavButtons[currentSlide].classList.remove('active');
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].style.display = 'block';
    sliderNavButtons[currentSlide].classList.add('active');
    resetIndicator();
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function resetIndicator() {
    clearInterval(intervalId);
    sliderIndicator.style.width = '0%';
    let width = 0;
    intervalId = setInterval(() => {
        if (width < 100) {
            width += 1;
            sliderIndicator.style.width = `${width}%`;
        } else {
            clearInterval(intervalId);
            nextSlide(); // Переключаем слайд после заполнения индикатора
        }
    }, slideInterval / 100); // Устанавливаем интервал для индикатора
}

sliderNavButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        showSlide(index);
    });
});

intervalId = setInterval(nextSlide, slideInterval); // Устанавливаем интервал переключения слайдов

showSlide(currentSlide);

// Создание падающих звезд
const starsBackground = document.querySelector('.stars-background');
for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.left = `${Math.random() * 100}vw`;
    star.style.animationDelay = `${Math.random() * 10}s`;
    starsBackground.appendChild(star);
}