document.addEventListener('DOMContentLoaded', function() {
  // Set current year
  const currentYearSpan = document.getElementById('current-year');
  if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
  }

  // Contact form
  const contactForm = document.querySelector('#contact form');
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
      const subject = `Contact Form: ${name}`;
      const body = `Email: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
      window.location.href = `mailto:rishabhksingh22@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;
      // Optional: Reset form
      contactForm.reset();
    });
  }

  // Join the club form
  const joinButton = document.querySelector('div[style*="bg-cta.jpg"] button');
  if (joinButton) {
    joinButton.addEventListener('click', function(e) {
      e.preventDefault();
      const emailInput = joinButton.parentElement.querySelector('input[type="text"]');
      const subscriberEmail = emailInput.value;
      if (subscriberEmail) {
        window.location.href = `mailto:rishabhksingh22@gmail.com?subject=Join the Club&body=Please add ${subscriberEmail} to the mailing list.`;
        emailInput.value = '';
      }
    });
  }
});
