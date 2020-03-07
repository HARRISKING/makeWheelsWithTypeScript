let tab1 = document.getElementById('tab1');
let tab2 = document.getElementById('tab2');
let box1 = document.getElementById('box1')
let box2 = document.getElementById('box2')
tab1.addEventListener('click', () => {
    tab1.classList.add('active')
    tab2.classList.remove('active')
    box2.classList.add('boxActive')
    box1.classList.remove('boxActive')
}, false)
tab2.addEventListener('click', () => {
    tab2.classList.add('active')
    tab1.classList.remove('active')
    box1.classList.add('boxActive')
    box2.classList.remove('boxActive')
}, false)