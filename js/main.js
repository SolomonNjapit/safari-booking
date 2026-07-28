// Booking form handling
const bookingForm = document.getElementById('booking-form');
const formStatus = document.getElementById('form-status');

if (bookingForm) {
  bookingForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // Basic front-end validation check (browser's required attributes already help here)
    formStatus.textContent = "Thank you! Your booking request has been received. We'll be in touch shortly.";
    formStatus.className = 'form-status success';

    bookingForm.reset();
  });
}
// Mobile menu toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', function () {
    navLinks.classList.toggle('nav-open');
    navToggle.classList.toggle('active');
  });
}