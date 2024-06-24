document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links and CTA button
    document.querySelectorAll('nav a, .cta-button').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add animation to product cards
    document.querySelectorAll('.product-card').forEach(card => {
        card.addEventListener('mouseover', function () {
            this.style.transform = 'translateY(-10px)';
            this.style.transition = 'transform 0.3s';
        });

        card.addEventListener('mouseout', function () {
            this.style.transform = 'translateY(0)';
            this.style.transition = 'transform 0.3s';
        });
    });
});
