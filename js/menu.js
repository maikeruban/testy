export default function menu () {
    const menu = document.querySelector('.menu');
    if (!menu) {
        return;
    }

    menu.addEventListener('click', () => {
        menu.classList.toggle('menu--open');
    });
}