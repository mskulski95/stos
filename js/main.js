// let dragged = null;

// const source = document.getElementsByClassName('chair-blue');
// source.addEventListener('dragstart', (e) => {
//     dragged = e.target;
// });

// const target = document.getElementById('droptarget');
// target.addEventListener('dragover', (e) => {
//     e.preventDefault();
// });

// target.addEventListener('drop', (e) => {
//     e.preventDefault();
//     if(e.target.className === 'dropzone') {
//         dragged.parentNode.removeChild(dragged);
//         e.target.appendChild(dragged);
//     }
// });


// let dragged;

// const source = document.getElementsByClassName('chair-blue');
// source.addEventListener('drag', () => {
//     console.log('dragging');
// })

// source.addEventListener('dragstart', (e) => {
//     dragged = e.target;
//     e.target.classList.add('dragging');
// });

// source.addEventListener('dragend', (e) => {
//     e.target.classList.remove(dragging);
// });

// const target = document.getElementById('droptarget');
// target.addEventListener('dragover', (e) => {
//     e.preventDefault();
// }, false);

// target.addEventListener('dragenter', (e) => {
//     e.target.classList.add('dragover');
// })

// target.addEventListener('dragleave', (e) => {
//     if (e.target.classList.contains('dropzone')) {
//         e.target.classList.remove('dragover');
//     }
// });

// target.addEventListener('drop', (e) => {
//     e.preventDefault();
//     if (e.target.classList.contains('dropzone')) {
//         e.target.classList.remove('dragover');
//         e.target.appendChild(dragged)
//     }
// });

