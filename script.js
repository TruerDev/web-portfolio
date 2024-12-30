const items_matrix = document.querySelectorAll('.matrix-text');

window.addEventListener('scroll', function () {
    let scrollPosition = window.scrollY;
    document.querySelector('.header-title-bg1').style.top = 38 - scrollPosition * 0.02 + '%';
    document.querySelector('.header-title-bg2').style.top = 41 - scrollPosition * 0.04 + '%';
    document.querySelector('.line-0').style.right = 0 - scrollPosition * 0.01 + '%';
});

function matrixEffect(element, duration) {
    const text = element.dataset.text;
    const possibleChars = 'ИиМмЯяФфАаЛлГгРрПпНнКк0123456789@!#$%^&*'; 
    const textLength = text.length;
    let iterations = 0;

    const interval = setInterval(() => {
        let scrambled = '';

        for (let i = 0; i < textLength; i++) {
            if (i < iterations) {
                scrambled += text[i];
            } else {
                scrambled += possibleChars[Math.floor(Math.random() * possibleChars.length)];
            }
        }

        element.textContent = scrambled;

        if (iterations >= textLength) {
            clearInterval(interval);
        }

        iterations += 1 / (duration / textLength); 
    }, 50); 
}

items_matrix.forEach(el => {
    el.addEventListener('mouseover', () => matrixEffect(el, 20));
})


const slider = document.querySelector('.slider');
const sliderWrapper = document.querySelector('.slider-wrapper');

const dragText = document.createElement('div');
dragText.classList.add('drag-text');
dragText.textContent = "< Drag >";
document.body.appendChild(dragText);

let isDown = false;
let startX;
let scrollLeft;
let targetX = 0;
let targetY = 0;
let currentX = 0;
let currentY = 0;

sliderWrapper.addEventListener('mousedown', (e) => {
    isDown = true;
    sliderWrapper.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;

    dragText.style.opacity = '1';
});

sliderWrapper.addEventListener('mouseleave', () => {
    isDown = false;
    sliderWrapper.classList.remove('active');
    dragText.style.opacity = '0';
});

sliderWrapper.addEventListener('mouseup', () => {
    isDown = false;
    sliderWrapper.classList.remove('active');
});

sliderWrapper.addEventListener('mousemove', (e) => {
    if (isDown) {
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 2;
        slider.scrollLeft = scrollLeft - walk;
    }
    targetX = e.pageX - 55;
    targetY = e.pageY - 20;
});

function animateDragText() {
    currentX += (targetX - currentX) * 0.1;
    currentY += (targetY - currentY) * 0.1;
    dragText.style.left = `${currentX}px`;
    dragText.style.top = `${currentY}px`;

    requestAnimationFrame(animateDragText);
}


animateDragText();


sliderWrapper.addEventListener('mouseenter', () => {
    if (!isDown) {
        dragText.style.opacity = '1';
    }
});

document.querySelector('.contact-btn').addEventListener('click', function () {
    const contactsSection = document.getElementById('contacts-section');
    if (contactsSection) {
        contactsSection.scrollIntoView({ behavior: 'smooth' });
    }
});

document.querySelector('form').addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(this);

    fetch('submit-form.php', {
        method: 'POST',
        body: formData,
    })
    .then(response => response.text())
    .then(data => {
        alert(data); 
        this.reset(); 
    })
    .catch(error => {
        console.error('Ошибка:', error);
        alert('Произошла ошибка при отправке данных.');
    });
});
