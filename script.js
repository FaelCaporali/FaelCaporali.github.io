window.onload = () => {

// muda nome de acordo com media query
    const funcionalidadesTela = () => {
    // const bodyStyle = document.querySelector('body').style;
    // bodyStyle.width = window.innerWidth;
    const titulo = document.getElementById('nome');
    if (window.innerWidth < 550) {
        titulo.innerText = 'Fael Caporali';
    } else if (window.innerWidth > 549) {
        titulo.innerText = 'Rafael Honório Caporali de Freitas';
    }
};
const menuSand = event => {
    event.target.classList.toggle('change');
    document.getElementById('myMenu').classList.toggle('opened-box');
    document.getElementById('navbar').classList.toggle('opened');
}
funcionalidadesTela();
window.addEventListener('resize', funcionalidadesTela);
document.querySelector('#sand').addEventListener('click', menuSand);
}