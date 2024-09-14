const draggables = document.querySelectorAll('.explain');  
const dropzone = document.getElementById('box');  

draggables.forEach(draggable => {  
    draggable.addEventListener('dragstart', dragStart);  
    draggable.addEventListener('dragend', dragEnd);  
});  

dropzone.addEventListener('dragover', dragOver);  
dropzone.addEventListener('dragenter', dragEnter);  
dropzone.addEventListener('dragleave', dragLeave);  
dropzone.addEventListener('drop', drop);  

function dragStart() {  
    this.classList.add('dragging');  
}  

function dragEnd() {  
    this.classList.remove('dragging');  
}  

function dragOver(e) {  
    e.preventDefault(); 
}  

function dragEnter() {  
    dropzone.classList.add('over');  
}  

function dragLeave() {  
    dropzone.classList.remove('over');  
}  

function drop(e) {  
    e.preventDefault();  
    dropzone.classList.remove('over');  
    const draggable = document.querySelector('.dragging');  
    dropzone.appendChild(draggable);  
}