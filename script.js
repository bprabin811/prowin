const header = document.querySelector('header');
const menu = document.querySelector('.menu');
const burger = document.querySelector('.burger');
const burgerSpans = document.querySelectorAll('.burger span');

const breakpoint = 768; // Set the breakpoint for mobile view

function toggleMobileMenu() {
  menu.classList.toggle('active');
  burgerSpans.forEach(span => {
    span.classList.toggle('active');
  });
}

function handleResize() {
  if (window.innerWidth < breakpoint) {
    // Enable mobile view
    header.classList.add('mobile');
    burger.addEventListener('click', toggleMobileMenu);
  } else {
    // Disable mobile view
    header.classList.remove('mobile');
    menu.classList.remove('active');
    burgerSpans.forEach(span => {
      span.classList.remove('active');
    });
    burger.removeEventListener('click', toggleMobileMenu);
  }
}

handleResize(); // Call the function on page load

window.addEventListener('resize', handleResize); // Add event listener for window resize
