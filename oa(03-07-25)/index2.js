document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.carousel-inner img');
    const dots = document.querySelectorAll('.dot');
    const totalSlides = slides.length;
    let currentIndex = 0;
    let autoSlideInterval;

    function showSlide(index) {
        currentIndex = (index + totalSlides) % totalSlides;
        
        // Adjust the translation based on screen size
        const viewportWidth = window.innerWidth;
        let slideWidthPercentage = 100 / totalSlides; // Default for desktop
    
        // On mobile view, adjust slide width percentage
        if (viewportWidth <= 480) {
            slideWidthPercentage = 100 / 3; // Showing 3 images at once on mobile
        }
    
        document.querySelector('.carousel-inner').style.transform = `translateX(-${currentIndex * slideWidthPercentage}%)`;
    
        // Update the active dot
        dots.forEach(dot => dot.classList.remove('active'));
        dots[currentIndex].classList.add('active');
    }
    
    // When a dot is clicked
    function currentSlide(index) {
        showSlide(index);
        resetAutoSlide(); // Reset auto-slide when a dot is clicked
    }

    // Add event listeners to each dot
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide(index);
        });
    });

    // Start automatic sliding
    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            showSlide(currentIndex + 1);
        }, 3000); // Slide every 3 seconds
    }

    // Reset automatic sliding
    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }

    // Initialize the carousel
    startAutoSlide();
    showSlide(currentIndex); // Show the first slide
});

