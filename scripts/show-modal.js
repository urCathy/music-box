const modal = document.getElementById('modal')
const name = document.getElementById('name')
const characteristic = document.getElementById('characteristic')
const img = document.getElementById('modal-img')
const buyBtn = document.getElementById('modal-buy-btn')

const buttons = document.querySelectorAll('.buying-good-item-button')

buttons.forEach(button => {
    const originalText = button.textContent;

    button.addEventListener('click', () => {
        modal.style.display = 'flex';
        characteristic.innerHTML = products[button.dataset.name].characteristics;
        name.textContent = products[button.dataset.name].name;
        img.src = products[button.dataset.name].img;
    })
    button.addEventListener('mouseenter', () => {
        button.textContent = "Купить";
    })
    button.addEventListener('mouseleave', () => {
        button.textContent = originalText;
    })
})

buyBtn.addEventListener('click', (e) => {
    modal.style.display = 'none';
})

