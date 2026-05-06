
const galeriaPage = "gallery.html";
const homePage = "index.html";
const kontaktBreak = document.getElementsByClassName("contact-grid");
const contactBreak = 

function kontakt(){
    console.log("kontakt");
    document.getElementById("contactBreak").scrollIntoView();
}

function monolit(){
    console.log("monolit")
    window.location.href = homePage
}

function galeria(){
    console.log("galeria")
    window.location.href = galeriaPage
}

window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  loader.classList.add('hidden');
});

//SLIDER GALLERY

document.querySelectorAll('.scroll-container img').forEach(img => {
  img.addEventListener('dragstart', (e) => e.preventDefault());
});

const slider = document.querySelector('.scroll-container');

let isDown = false;
let startX;
let scrollLeft;
let velocity = 0;
let momentumID;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
  cancelMomentumTracking();
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
  beginMomentumTracking();
});

slider.addEventListener('mouseup', () => {
  isDown = false;
  beginMomentumTracking();
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();

  const x = e.pageX - slider.offsetLeft;
  const walk = x - startX;

  const prevScrollLeft = slider.scrollLeft;
  slider.scrollLeft = scrollLeft - walk;

  velocity = slider.scrollLeft - prevScrollLeft;
});

function beginMomentumTracking() {
  cancelMomentumTracking();
  momentumID = requestAnimationFrame(momentumLoop);
}

function cancelMomentumTracking() {
  cancelAnimationFrame(momentumID);
}

function momentumLoop() {
  slider.scrollLeft += velocity;
  velocity *= 0.9; // friction (zmień na 0.9–0.98 żeby dostroić)

  if (Math.abs(velocity) > 0.5) {
    momentumID = requestAnimationFrame(momentumLoop);
  }
}