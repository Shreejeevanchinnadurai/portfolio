document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const formData = {
        name: contactForm.name.value,
        email: contactForm.email.value,
        message: contactForm.message.value,
      };

      try {
        const response = await fetch('https://portfolio-5t2y.onrender.com/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          alert('Message sent successfully!');
          contactForm.reset();
        } else {
          alert('Failed to send message.');
        }
      } catch (error) {
        alert('Error sending message.');
      }
    });
  }
});
