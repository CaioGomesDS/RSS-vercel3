document.addEventListener('DOMContentLoaded', () => {

    // 1. Header Scroll Effect
    const header = document.querySelector('.header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // 2. Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav');
    const mobileLinks = document.querySelectorAll('.mobile-nav a');

    menuToggle.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
        // Animated hamburger
        menuToggle.classList.toggle('open');
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            menuToggle.classList.remove('open');
        });
    });

    // 3. Scroll Reveal Animations (Intersection Observer)
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, observerOptions);

    const fadeElements = document.querySelectorAll('.fade-up');
    fadeElements.forEach(el => observer.observe(el));

    // 4. Comparison Slider Logic (Before / After)
    const sliderContainer = document.querySelector('.comparison-slider');
    const sliderHandle = document.querySelector('.slider-handle');
    const imgAfterWrapper = document.querySelector('.img-after-wrapper');
    const imgAfter = document.querySelector('.img-after');

    if (sliderContainer) {
        let isSliding = false;

        // Ensure the inner image stays exactly the width of the container
        const setImgWidth = () => {
            imgAfter.style.width = sliderContainer.offsetWidth + 'px';
        };
        setImgWidth();
        window.addEventListener('resize', setImgWidth);

        const moveSlider = (x) => {
            const containerRect = sliderContainer.getBoundingClientRect();
            let pos = x - containerRect.left;
            
            // Clamp
            if (pos < 0) pos = 0;
            if (pos > containerRect.width) pos = containerRect.width;

            const percentage = (pos / containerRect.width) * 100;
            
            imgAfterWrapper.style.width = `${percentage}%`;
            sliderHandle.style.left = `${percentage}%`;
        };

        // Mouse Events
        sliderHandle.addEventListener('mousedown', (e) => {
            isSliding = true;
            sliderContainer.classList.add('sliding');
            e.preventDefault();
        });

        window.addEventListener('mouseup', () => {
            isSliding = false;
            sliderContainer.classList.remove('sliding');
        });

        window.addEventListener('mousemove', (e) => {
            if (!isSliding) return;
            moveSlider(e.clientX);
        });

        // Touch Events
        sliderHandle.addEventListener('touchstart', (e) => {
            isSliding = true;
            sliderContainer.classList.add('sliding');
        });

        window.addEventListener('touchend', () => {
            isSliding = false;
            sliderContainer.classList.remove('sliding');
        });

        window.addEventListener('touchmove', (e) => {
            if (!isSliding) return;
            moveSlider(e.touches[0].clientX);
        });
    }

});
