const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next'); // Added missing '='
const circles = document.querySelectorAll('.circle');
let currentActive = 1;

next.addEventListener('click', () => { // Added '() =>' for arrow function
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length; // Fixed assignment
  }
  update();
});

prev.addEventListener('click', () => {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
});

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });
  
  const actives = document.querySelectorAll('.active'); // Added 'const'
  progress.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + '%'; // Corrected syntax
  
  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
