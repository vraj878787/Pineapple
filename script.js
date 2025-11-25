document.addEventListener('DOMContentLoaded', function() {
    // Initialize lightbox functionality for gallery
    const galleryImages = document.querySelectorAll('.columns-1 img');
    const lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML = `
        <span class="close-lightbox">&times;</span>
        <div class="lightbox-content">
            <img class="lightbox-img" src="" alt="">
        </div>
    `;
    document.body.appendChild(lightbox);
    
    galleryImages.forEach(img => {
        img.addEventListener('click', function() {
            const lightboxImg = lightbox.querySelector('.lightbox-img');
            lightboxImg.src = this.src;
            lightboxImg.alt = this.alt;
            lightbox.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });
    
    lightbox.querySelector('.close-lightbox').addEventListener('click', function() {
        lightbox.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Form submission handler
    const bookingForm = document.querySelector('form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Simulate form submission
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Booking...';
            submitBtn.disabled = true;
            
            setTimeout(() => {
                submitBtn.textContent = 'Booking Confirmed!';
                
                // Show confirmation message
                const confirmation = document.createElement('div');
                confirmation.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg';
                confirmation.textContent = 'Your table has been booked successfully!';
                document.body.appendChild(confirmation);
                
                // Remove message after 3 seconds
                setTimeout(() => {
                    confirmation.remove();
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                    this.reset();
                }, 3000);
            }, 1500);
        });
    }
    
    // Add scroll reveal animations
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.animate-on-scroll');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementPosition < windowHeight - 100) {
                element.classList.add('animate-fade-in');
            }
        });
    };
    
    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initialize on load
});