document.querySelector('.chair-blue').addEventListener('touchstart', function (e) {

    e.target.style.position = 'fixed';
    e.target.style.top = e.touches[0].clientY;
    e.target.style.left = e.touches[0].clientX;
})


document.querySelector('.chair-blue').addEventListener('touchmove', function (e) {

    e.target.style.top = e.touches[0].clientY + 'px';
    e.target.style.left = e.touches[0].clientX + 'px';
})


document.querySelector('.chair-blue').addEventListener('touchend', function (e) {
    if (e.target) {
        e.target.style.top = '';
        e.target.style.left = '';

        e.target = null;

    }
})

document.querySelector('.chair-green').addEventListener('touchstart', function (e) {

    e.target.style.position = 'fixed';
    e.target.style.top = e.touches[0].clientY;
    e.target.style.left = e.touches[0].clientX;
})


document.querySelector('.chair-green').addEventListener('touchmove', function (e) {

    e.target.style.top = e.touches[0].clientY + 'px';
    e.target.style.left = e.touches[0].clientX + 'px';
})


document.querySelector('.chair-green').addEventListener('touchend', function (e) {
    if (e.target) {
        e.target.style.top = '';
        e.target.style.left = '';

        e.target = null;

    }
})


document.querySelector('.chair-red').addEventListener('touchstart', function (e) {

    e.target.style.position = 'fixed';
    e.target.style.top = e.touches[0].clientY;
    e.target.style.left = e.touches[0].clientX;
})


document.querySelector('.chair-red').addEventListener('touchmove', function (e) {

    e.target.style.top = e.touches[0].clientY + 'px';
    e.target.style.left = e.touches[0].clientX + 'px';
})

document.querySelector('.chair-red').addEventListener('touchend', function (e) {
    if (e.target) {
        e.target.style.top = '';
        e.target.style.left = '';

        e.target = document.querySelector('.dropzone');

    }
})

document.querySelector('.chair-blue2').addEventListener('touchstart', function (e) {

    e.target.style.position = 'fixed';
    e.target.style.top = e.touches[0].clientY;
    e.target.style.left = e.touches[0].clientX;
})

document.querySelector('.chair-blue2').addEventListener('touchmove', function (e) {

    e.target.style.top = e.touches[0].clientY + 'px';
    e.target.style.left = e.touches[0].clientX + 'px';
})

// document.querySelector('.chair-blue2').addEventListener('touchend', function (e) {
//     if (e.target) {
//         e.target.style.top = '';
//         e.target.style.left = '';

//         e.target = null;

//     }
// })

