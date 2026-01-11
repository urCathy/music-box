const formSubmit = document.querySelector('.questions-submit-btn');

formSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    formSubmit.textContent = "Отправлено!";
})

const items = document.querySelectorAll('.questions-item');
const filterButtons = document.querySelectorAll('.faq-button');
const faqInput = document.getElementById('faq-input');
const texts = document.querySelectorAll('.questions-item-text');

items.forEach(item => {
    const btn = item.querySelector('.arrow');
    const text = item.querySelector('.questions-item-text');

    btn.addEventListener('click', (e) => {
        texts.forEach(item => {
            if (item === text) {
                item.classList.toggle('hidden');
            }
            else {
                item.classList.add('hidden');
            }
        })
    })
});

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.dataset.category;
        items.forEach(item => {
            const itemCategory = item.dataset.category;

            if (category === "all" || itemCategory === category) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }

        });
    })
})

faqInput.addEventListener('input', () => {
    const inputValue = faqInput.value.trim().toLowerCase();
    items.forEach(item => {
        const title = item.querySelector('.questions-item-title').textContent.toLowerCase();
        if (title.includes(inputValue)) {
            item.classList.remove('hidden');
        } else {
            item.classList.add('hidden');
        }
    })
})