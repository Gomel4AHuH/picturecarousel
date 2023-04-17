let index = 0;

let images = document.querySelectorAll('.image');
let dots = document.querySelectorAll('.dot');

function showImage(i){
    index += i;

    for (const image of images) {
        image.style.display = 'none';
    }
    
    for (const dot of dots) {
        dot.classList.add('active');
    }

    if (index >= images.length){
        index = 0;
    }

    if (index < 0){
        index = images.length - 1;
    }

    images[index].style.display = 'block';
    dots[index].classList.remove('active');
}

showImage(index);