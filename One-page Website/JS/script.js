let currentSlideIndex = 1;

function openViewer(n) {
document.getElementById("galleryModal").style.display = "block";
showSlide(n);
}

function closeViewer() {
document.getElementById("galleryModal").style.display = "none";
}

function moveSlide(step) {
showSlide(currentSlideIndex + step);
}

function showSlide(n) {
const slides = document.getElementsByClassName("slide");
const thumbs = document.getElementsByClassName("small-thumb");
const caption = document.getElementById("imageCaption");

if (n > slides.length) {
currentSlideIndex = 1;
} else if (n < 1) {
currentSlideIndex = slides.length;
} else {
currentSlideIndex = n;
}

for (let i = 0; i < slides.length; i++) {
slides[i].style.display = "none";
}

for (let i = 0; i < thumbs.length; i++) {
thumbs[i].classList.remove("active-thumb");
}

slides[currentSlideIndex - 1].style.display = "block";
thumbs[currentSlideIndex - 1].classList.add("active-thumb");
caption.innerHTML = thumbs[currentSlideIndex - 1].alt;
}