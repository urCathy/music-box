const options = {
    threshold: 0.5 // 50% элемента в видимости — запускаем анимацию
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, options);

document.querySelectorAll('.smooth-appear, .mouse').forEach((el) => {
    observer.observe(el);
});

const gears = document.querySelectorAll('.gear');
const mouse = document.querySelector('.moving-mouse');
const mouseContainer = document.querySelector('.moving-mouse-container');
const reviewContainer = document.querySelector('.review-cards-container');
const questionsSection = document.querySelector('.questions-section');

window.addEventListener('scroll', () => {
    handleScroll(gears[0], gears[0], 60);
    handleScroll(gears[1], gears[1],60);
    handleScroll(mouseContainer, mouse, null, [0, 500]);
    handleScroll(reviewContainer, questionsSection, null, [-3500, 0]);
})

// moveContainer - контейнер, что мы двигаем, observedElement - элемент, который мы при скролле отслеживаем,
// rotate - угол, на который вертим, translate - сдвиг вправо или вниз в пикселях
function handleScroll(moveContainer, observedElement, rotate, translate) {
    // расстояние от верхней границы видимого окна до верхней границы элемента
    const rect = observedElement.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // 0 - элемент вне экрана, 1 - полностью виден
    let progress = 1 - (rect.top / windowHeight);

    if (progress < 0) progress = 0;
    if (progress > 1) progress = 1;

    // смещаем или крутим в зависимости от скролла
    // создаём массив трансформаций
    let transforms = [];

    if (rotate) {
        transforms.push(`rotate(${progress * rotate}deg)`);
    }

    if (translate) {
        transforms.push(`translate(${progress * translate[0]}px, ${progress * translate[1]}px)`);
    }

    // объединяем в одну строку
    moveContainer.style.transform = transforms.join(" ");
}
