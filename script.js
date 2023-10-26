const page = document.getElementById('container');
let changeBgc = document.getElementById('btn');

changeBgc.addEventListener('click', function () {
    let theColor = document.getElementById('bgc').value;
    page.style.backgroundColor = theColor;
});
