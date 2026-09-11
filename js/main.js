// Booking form handling
const bookingForm = document.getElementById('booking-form');
const formStatus = document.getElementById('form-status');

if (bookingForm) {
  bookingForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(bookingForm);

    fetch(bookingForm.action, {
      method: 'POST',
      body: formData,
      headers: { 'Accept': 'application/json' }
    })
      .then(response => {
        if (response.ok) {
          formStatus.textContent = "Thank you! Your booking request has been received.";
          formStatus.className = 'form-status success';
          bookingForm.reset();
        } else {
          formStatus.textContent = "Something went wrong. Please try again or contact us directly.";
          formStatus.className = 'form-status error';
        }
      })
      .catch(() => {
        formStatus.textContent = "Something went wrong. Please check your connection and try again.";
        formStatus.className = 'form-status error';
      });
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