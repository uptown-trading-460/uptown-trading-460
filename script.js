/* UPTOWN TRADING 460 CC - JavaScript */

document.addEventListener('DOMContentLoaded', function() {

    // PRELOADER
    const preloader = document.getElementById('preloader');
    if (preloader) {
        window.addEventListener('load', function() {
            setTimeout(function() {
                preloader.classList.add('hidden');
            }, 2500);
        });
        setTimeout(function() {
            preloader.classList.add('hidden');
        }, 4000);
    }

    // NAVBAR SCROLL
    const navbar = document.getElementById('navbar');
    const backToTop = document.getElementById('backToTop');

    window.addEventListener('scroll', function() {
        const scrollY = window.scrollY;
        if (navbar) {
            if (scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }
        if (backToTop) {
            if (scrollY > 500) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
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

    // SCROLL ANIMATIONS
    const animatedElements = document.querySelectorAll('[data-animate]');

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(function(entry) {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, { root: null, rootMargin: '0px 0px -50px 0px', threshold: 0.1 });

    animatedElements.forEach(function(el) {
        observer.observe(el);
    });

    // COUNTER ANIMATION (works for both .stat-num and .stat-number)
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

    statNums.forEach(function(num) {
        counterObserver.observe(num);
    });

    // ACTIVE NAV LINK
    const sections = document.querySelectorAll('section[id]');

    window.addEventListener('scroll', function() {
        const scrollPosition = window.scrollY + 100;

        sections.forEach(function(section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelectorAll('.nav-links a').forEach(function(link) {
                    if (!link.classList.contains('active')) {
                        link.style.color = '';
                    }
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.style.color = '#C8202A';
                    }
                });
            }
        });
    });

    console.log('%c UPTOWN TRADING 460 CC ', 'background: #C8202A; color: white; font-size: 20px; padding: 10px; border-radius: 5px;');
    console.log('%c Building South Africa\'s Future ', 'color: #1A1A2E; font-size: 14px;');

});
