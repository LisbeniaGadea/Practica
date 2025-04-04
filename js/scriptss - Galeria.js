const gallery = document.querySelector('.gallery');
const images = document.querySelectorAll('.gallery img');
const totalImages = images.length;
let currentIndex = 0;

function showImage(index) {
    if (index < 0) {
        currentIndex = totalImages - 1; 
    } else if (index >= totalImages) {
        currentIndex = 0; 
    }
    
    const offset = -currentIndex * 100; 
    gallery.style.transform = `translateX(${offset}%)`;
}

setInterval(() => {
    currentIndex++;
    showImage(currentIndex);
}, 4000);

document.querySelector('.prev').addEventListener('click', () => {
    currentIndex--;
    showImage(currentIndex);
});

document.querySelector('.next').addEventListener('click', () => {
    currentIndex++;
    showImage(currentIndex);
});