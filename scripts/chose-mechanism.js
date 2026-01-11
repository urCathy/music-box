const points = document.querySelectorAll('.point')

points.forEach(point => {
    point.addEventListener('click', (e) => {
        const name = point.dataset.element;
        document.querySelectorAll('.mechanism-part').forEach(el => {
            el.classList.add('darker')
        });
        document.querySelectorAll('.mechanism-description-text').forEach(el => {
            el.classList.add('hidden')
        })

        const partText = document.getElementById(name);
        const partImage= document.querySelector(`.${name}`);
        if (partImage) {
            partImage.classList.remove('darker');
        }
        if (partText) {
            partText.classList.remove('hidden');
        }
    })
})