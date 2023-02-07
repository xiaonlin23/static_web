const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = ['images/pic1.jpg', 'images/pic2.jpg', 'images/pic3.jpg', 'images/pic4.jpg', 'images/pic5.jpg'];
/* Declaring the alternative text for each image file */
for (var i = 0; i < images.length; i++) {
    const newImage = document.createElement('img');
    var imageSrc = images[i];
    var imageAlt = ((images[i].split('/'))[1].split('.'))[0];
    newImage.setAttribute('src', imageSrc);
    newImage.setAttribute('alt', imageAlt);
    thumbBar.appendChild(newImage);
}

thumbBar.addEventListener('click', function(e) {
    var currentSrc = e.target.getAttribute('src');
    var currentClass = e.target.getAttribute('class');
    displayedImage.setAttribute('src', currentSrc);
    displayedImage.setAttribute('class',currentClass);
});
/* Wiring up the Darken/Lighten button */
btn.addEventListener('click',function() {
    if (btn.getAttribute('class') === 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
        btn.setAttribute('class','dark');
        btn.textContent = 'Darken';
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
});