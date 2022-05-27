const ham = document.getElementById('ham');
const ham__img = document.getElementById('ham__img');
const hidden__main__menu = document.getElementById('hidden__main__menu');
const hero = document.getElementById('hero');
const subheader = document.getElementById('subheader');
const logo = document.getElementById('logo');
const social__list = document.getElementById('social__list');
const search__icon = document.getElementById('search__icon');

ham.addEventListener('click', () => {
    if(window.getComputedStyle(hidden__main__menu).display === 'none') {
        hidden__main__menu.style.display = 'block';
        hero.style.position = 'fixed';
        subheader.style.color = 'white';
        ham__img.src = 'public/images/x-svgrepo-com.svg';
        ham.style.width = '1.3em';
        ham__img.style.backgroundColor = 'white';
        ham__img.style.borderRadius = "50rem";
        logo.style.display = 'none';
        search__icon.style.display = 'none';
        social__list.style.display = 'flex';
        social__list.style.marginLeft = 'auto';
        social__list.style.marginTop = '.1rem';
        social__list.style.marginBottom = '.1rem';
    } else {
        hidden__main__menu.style.display = 'none';
        hero.style.position = 'relative';
        subheader.style.color = 'black';
        ham__img.src = 'public/images/ham_menu.svg';
        ham.style.width= '1em';
        ham__img.style.backgroundColor = '#ed002d';
        ham__img.style.borderRadius = "0";
        logo.style.display = 'flex';
        search__icon.style.display = 'block';
        social__list.style.display = 'none';
        social__list.removeAttribute('style');
    };
});