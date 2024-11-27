// Scroll to Top Button Functionality
const scrollTopButton = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        scrollTopButton.style.display = 'block';
    } else {
        scrollTopButton.style.display = 'none';
    }
});

scrollTopButton.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Fade-in Effect for Sections
const fadeInSections = document.querySelectorAll('.fade-in');

window.addEventListener('scroll', () => {
    fadeInSections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight - 50) {
            section.classList.add('visible');
        }
    });
});

// Toggle Form Visibility
function toggleForm() {
    var formContainer = document.getElementById('google-form');
    formContainer.style.display = 'block';  // Show the form when button is clicked
}

// Hide the form after submission
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission (to keep the form visible for testing)

    // Hide the Google form after submission
    document.getElementById('google-form').style.display = 'none';
    alert('Your message has been sent!'); // Optional: Show a confirmation message
});
