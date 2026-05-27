/* UPTOWN TRADING 460 CC - Modern JavaScript */

document.addEventListener('DOMContentLoaded', function() {

    // PRELOADER
    const preloader = document.getElementById('preloader');
    if (preloader) {
        window.addEventListener('load', function() {
            setTimeout(function() { preloader.classList.add('hidden'); }, 1500);
        });
        setTimeout(function() { preloader.classList.add('hidden'); }, 3000);
    }

    // NAVBAR SCROLL
    const navbar = document.getElementById('navbar');
    const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', function() {
        const scrollY = window.scrollY;
        if (navbar) {
            if (scrollY > 50) navbar.classList.add('scrolled');
            else navbar.classList.remove('scrolled');
        }
        if (backToTop) {
            if (scrollY > 500) backToTop.classList.add('visible');
            else backToTop.classList.remove('visible');
        }
    });

    // BACK TO TOP
    if (backToTop) {
        backToTop.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // MOBILE MENU
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            navLinks.classList.toggle('show');
        });
        document.querySelectorAll('.nav-links a').forEach(function(link) {
            link.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                navLinks.classList.remove('show');
            });
        });
    }

    // SMOOTH SCROLL
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });

    // SERVICE TABS
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');

            // Remove active from all
            tabBtns.forEach(function(b) { b.classList.remove('active'); });
            tabContents.forEach(function(c) { c.classList.remove('active'); });

            // Add active to clicked
            this.classList.add('active');
            const targetTab = document.getElementById('tab-' + tabName);
            if (targetTab) targetTab.classList.add('active');
        });
    });

    // HERO SLIDESHOW
    const heroSlides = document.querySelectorAll('.hero-slide');
    if (heroSlides.length > 1) {
        let currentSlide = 0;
        setInterval(function() {
            heroSlides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % heroSlides.length;
            heroSlides[currentSlide].classList.add('active');
        }, 6000);
    }

    // SCROLL ANIMATIONS
    const animatedElements = document.querySelectorAll('[data-animate]');
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, { rootMargin: '0px 0px -50px 0px', threshold: 0.1 });

    animatedElements.forEach(function(el) { observer.observe(el); });

    // COUNTER ANIMATION
    const statNums = document.querySelectorAll('[data-count]');
    const counterObserver = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                const target = entry.target;
                const countTo = parseInt(target.getAttribute('data-count'));
                let count = 0;
                const duration = 2000;
                const increment = countTo / (duration / 16);
                const timer = setInterval(function() {
                    count += increment;
                    if (count >= countTo) {
                        count = countTo;
                        clearInterval(timer);
                    }
                    target.textContent = Math.floor(count);
                }, 16);
                counterObserver.unobserve(target);
            }
        });
    }, { threshold: 0.5 });
    statNums.forEach(function(num) { counterObserver.observe(num); });

    // LAZY LOAD IMAGES
    if ('loading' in HTMLImageElement.prototype) {
        document.querySelectorAll('img[loading="lazy"]').forEach(function(img) {
            img.src = img.src;
        });
    }

    console.log('%c UPTOWN TRADING 460 CC ', 'background:#C8202A;color:white;font-size:20px;padding:10px;border-radius:5px;');
    console.log('%c Building South Africa\'s Future ', 'color:#1A1A2E;font-size:14px;');
});
