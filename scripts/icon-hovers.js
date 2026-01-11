const links = document.querySelectorAll('.footer-logo');

links.forEach(link => {
    const name = link.dataset.link;

    link.addEventListener('mouseenter', () => {
        link.src = `assets/images/logos/${name}-act.png`;
        if (name === 'logo'){
            link.classList.remove('blue');
            link.classList.add('light-blue');
        }
    })

    link.addEventListener('mouseleave', () => {
        link.src = `assets/images/logos/${name}.png`;
        if (name === 'logo'){
            link.classList.remove('light-blue');
            link.classList.add('blue');
        }
    })
})