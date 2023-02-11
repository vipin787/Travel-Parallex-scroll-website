let dubaiText = document.getElementById('dubaitext');
let burjKhalifa = document.getElementById('burjkhalifa');
let stars = document.getElementById('stars');

window.addEventListener('scroll', () =>{
    let value = window.scrollY;
    dubaiText.style.left = value* -2 + 'px';
    burjKhalifa.style.top = value* 1 + 'px';
    stars.style.top = value* 1 + 'px';
})
