let menuBtn = document.getElementById('menuBtn');
let menuCkick = false;

menuBtn.addEventListener('click', () => {
    if(menuCkick == false) {
        document.getElementById('nav').style.display = 'flex';
        menuCkick = true;
    }
    else {
        document.getElementById('nav').style.display = 'none';
        menuCkick = false;
    }
});