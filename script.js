/* UPTOWN TRADING 460 CC - Modern JavaScript with Image Fallback System */

document.addEventListener('DOMContentLoaded', function() {

    // ============================================
    // IMAGE FALLBACK SYSTEM
    // ============================================

    const imageFallbacks = {
        mining: [
            'https://images.pexels.com/photos/2058128/pexels-photo-2058128.jpeg?auto=compress&w=800',
            'https://images.pexels.com/photos/2480807/pexels-photo-2480807.jpeg?auto=compress&w=800',
            'https://images.pexels.com/photos/162568/oil-pump-jack-sunset-clouds-silhouette-162568.jpeg?auto=compress&w=800'
        ],
        construction: [
            'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&w=800',
            'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&w=800',
            'https://images.pexels.com/photos/210095/pexels-photo-210095.jpeg?auto=compress&w=800'
        ],
        trucks: [
            'https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&w=800',
            'https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg?auto=compress&w=800',
            'https://images.pexels.com/photos/1119542/pexels-photo-1119542.jpeg?auto=compress&w=800'
        ],
        'trucks-sa': [
            'https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&w=800',
            'https://images.pexels.com/photos/1117210/pexels-photo-1117210.jpeg?auto=compress&w=800',
            'https://images.pexels.com/photos/1119542/pexels-photo-1119542.jpeg?auto=compress&w=800',
            'https://images.pexels.com/photos/906982/pexels-photo-906982.jpeg?auto=compress&w=800'
        ],
        // PPE - Worker overalls only fallbacks
        'ppe-overalls': [
            'https://images.pexels.com/photos/8961069/pexels-photo-8961069.jpeg?auto=compress&w=800',
            'https://images.pexels.com/photos/4480505/pexels-photo-4480505.jpeg?auto=compress&w=800',
            'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&w=800'
        ],
        ppe: [
            'https://images.pexels.com/photos/8961069/pexels-photo-8961069.jpeg?auto=compress&w=800',
            'https://images.pexels.com/photos/4480505/pexels-photo-4480505.jpeg?auto=compress&w=800',
            'https://images.pexels.com/photos/8961008/pexels-photo-8961008.jpeg?auto=compress&w=800'
        ],
        // Lubricants - Oil drums fallbacks
        'lubricants-drums': [
            'https://images.pexels.com/photos/3855962/pexels-photo-3855962.jpeg?auto=compress&w=800',
            'https://images.pexels.com/photos/5980585/pexels-photo-5980585.jpeg?auto=compress&w=800',
            'https://images.pexels.com/photos/6794954/pexels-photo-6794954.jpeg?auto=compress&w=800'
        ],
        lubricants: [
            'https://images.pexels.com/photos/3855962/pexels-photo-3855962.jpeg?auto=compress&w=800',
            'https://images.pexels.com/photos/5980585/pexels-photo-5980585.jpeg?auto=compress&w=800',
            'https://images.pexels.com/photos/162568/oil-pump-jack-sunset-clouds-silhouette-162568.jpeg?auto=compress&w=800'
        ],
        // Batteries - Actual car/truck battery fallbacks
        'batteries-actual': [
            'https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg?auto=compress&w=800',
            'https://images.pexels.com/photos/8775288/pexels-photo-8775288.jpeg?auto=compress&w=800',
            'https://images.pexels.com/photos/9800015/pexels-photo-9800015.jpeg?auto=compress&w=800'
        ],
        batteries: [
            'https://images.pexels.com/photos/110844/pexels-photo-110844.jpeg?auto=compress&w=800',
            'https://images.pexels.com/photos/8775288/pexels-photo-8775288.jpeg?auto=compress&w=800',
            'https://images.pexels.com/photos/9800015/pexels-photo-9800015.jpeg?auto=compress&w=800'
        ],
        // Tyres - Stacked tyres no humans fallbacks
        'tyres-stacked': [
            'https://images.pexels.com/photos/3806249/pexels-photo-3806249.jpeg?auto=compress&w=800',
            'https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&w=800',
            'https://images.pexels.com/photos/1119542/pexels-photo-1119542.jpeg?auto=compress&w=800'
        ],
        tyres: [
            'https://images.pexels.com/photos/3806249/pexels-photo-3806249.jpeg?auto=compress&w=800',
            'https://images.pexels.com/photos/1119542/pexels-photo-1119542.jpeg?auto=compress&w=800',
            'https://images.pexels.com/photos/2127733/pexels-photo-2127733.jpeg?auto=compress&w=800'
        ],
        // Mining equipment - drilling & heavy machinery fallbacks
        'mining-equipment': [
            'https://images.pexels.com/photos/2058128/pexels-photo-2058128.jpeg?auto=compress&w=800',
            'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&w=800',
            'https://images.pexels.com/photos/162568/oil-pump-jack-sunset-clouds-silhouette-162568.jpeg?auto=compress&w=800'
        ],
        'mining-drill': [
            'https://images.pexels.com/photos/2058128/pexels-photo-2058128.jpeg?auto=compress&w=800',
            'https://images.pexels.com/photos/2480807/pexels-photo-2480807.jpeg?auto=compress&w=800',
            'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&w=800'
        ],
        // Consumables - water and real consumables fallbacks
        consumables: [
            'https://images.pexels.com/photos/1000084/pexels-photo-1000084.jpeg?auto=compress&w=800',
            'https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg?auto=compress&w=800',
            'https://images.pexels.com/photos/4481532/pexels-photo-4481532.jpeg?auto=compress&w=800'
        ],
        equipment: [
            'https://images.pexels.com/photos/162568/oil-pump-jack-sunset-clouds-silhouette-162568.jpeg?auto=compress&w=800',
            'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&w=800',
            'https://images.pexels.com/photos/3760529/pexels-photo-3760529.jpeg?auto=compress&w=800'
        ],
        warehouse: [
            'https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg?auto=compress&w=800',
            'https://images.pexels.com/photos/4481532/pexels-photo-4481532.jpeg?auto=compress&w=800',
            'https://images.pexels.com/photos/4481260/pexels-photo-4481260.jpeg?auto=compress&w=800'
        ],
        supplies: [
            'https://images.pexels.com/photos/1797428/pexels-photo-1797428.jpeg?auto=compress&w=800',
            'https://images.pexels.com/photos/4481532/pexels-photo-4481532.jpeg?auto=compress&w=800',
            'https://images.pexels.com/photos/1796720/pexels-photo-1796720.jpeg?auto=compress&w=800'
        ],
        tools: [
            'https://images.pexels.com/photos/1409216/pexels-photo-1409216.jpeg?auto=compress&w=800',
            'https://images.pexels.com/photos/175039/pexels-photo-175039.jpeg?auto=compress&w=800',
            'https://images.pexels.com/photos/3754056/pexels-photo-3754056.jpeg?auto=compress&w=800'
        ],
        civil: [
            'https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&w=800',
            'https://images.pexels.com/photos/2218661/pexels-photo-2218661.jpeg?auto=compress&w=800',
            'https://images.pexels.com/photos/210095/pexels-photo-210095.jpeg?auto=compress&w=800'
        ],
        industrial: [
            'https://images.pexels.com/photos/162568/oil-pump-jack-sunset-clouds-silhouette-162568.jpeg?auto=compress&w=800',
            'https://images.pexels.com/photos/2058128/pexels-photo-2058128.jpeg?auto=compress&w=800',
            'https://images.pexels.com/photos/1216589/pexels-photo-1216589.jpeg?auto=compress&w=800'
        ]
    };

    // SVG placeholder generator (final fallback)
    function generatePlaceholder(category, text) {
        const colors = {
            mining: '#1A1A2E',
            construction: '#FF6B35',
            trucks: '#2C5F2D',
            'trucks-sa': '#2C5F2D',
            'ppe-overalls': '#F4A261',
            ppe: '#F4A261',
            'lubricants-drums': '#2A9D8F',
            lubricants: '#2A9D8F',
            'batteries-actual': '#264653',
            batteries: '#264653',
            'tyres-stacked': '#1A1A2E',
            tyres: '#1A1A2E',
            'mining-equipment': '#E76F51',
            'mining-drill': '#E76F51',
            consumables: '#457B9D',
            equipment: '#E76F51',
            warehouse: '#457B9D',
            supplies: '#1D3557',
            tools: '#6A040F',
            civil: '#370617',
            industrial: '#003049'
        };
        const color = colors[category] || '#1A1A2E';
        const label = (text || category || 'Image').toUpperCase();

        const svg = `
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 600" width="800" height="600">
                <defs>
                    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stop-color="${color}"/>
                        <stop offset="100%" stop-color="#C8202A"/>
                    </linearGradient>
                </defs>
                <rect width="800" height="600" fill="url(#g)"/>
                <circle cx="400" cy="250" r="80" fill="white" opacity="0.1"/>
                <text x="400" y="320" font-family="Arial,sans-serif" font-size="36" font-weight="900" fill="white" text-anchor="middle">${label}</text>
                <text x="400" y="370" font-family="Arial,sans-serif" font-size="18" fill="white" opacity="0.8" text-anchor="middle">UPTOWN TRADING 460</text>
            </svg>
        `;
        return 'data:image/svg+xml;base64,' + btoa(svg);
    }

    // Track which fallback we're on for each image
    const fallbackCounter = new WeakMap();

    function setupImageFallback(img) {
        if (img.hasAttribute('data-fallback-set')) return;
        img.setAttribute('data-fallback-set', 'true');

        img.addEventListener('error', function() {
            const category = this.getAttribute('data-category') || 'industrial';
            const altText = this.getAttribute('alt') || category;

            let counter = fallbackCounter.get(this) || 0;
            const fallbacks = imageFallbacks[category] || imageFallbacks.industrial;

            if (counter < fallbacks.length) {
                console.log('Image fallback ' + (counter + 1) + ' for: ' + altText);
                this.src = fallbacks[counter];
                fallbackCounter.set(this, counter + 1);
            } else {
                console.log('Using SVG placeholder for: ' + altText);
                this.src = generatePlaceholder(category, altText);
                this.removeEventListener('error', arguments.callee);
            }
        });
    }

    // Apply fallback to all images
    document.querySelectorAll('img[data-category]').forEach(setupImageFallback);

    // Handle background images on hero slides
    document.querySelectorAll('.hero-slide').forEach(function(slide) {
        const bgUrl = slide.style.backgroundImage.replace(/url\(["']?([^"']*)["']?\)/, '$1');
        if (bgUrl && bgUrl !== 'none') {
            const testImg = new Image();
            testImg.onerror = function() {
                const category = slide.getAttribute('data-bg') || 'industrial';
                const fallbacks = imageFallbacks[category] || imageFallbacks.industrial;
                if (fallbacks.length > 0) {
                    slide.style.backgroundImage = 'url("' + fallbacks[0] + '")';
                }
            };
            testImg.src = bgUrl;
        }
    });

    // ============================================
    // PRELOADER
    // ============================================
    const preloader = document.getElementById('preloader');
    if (preloader) {
        window.addEventListener('load', function() {
            setTimeout(function() { preloader.classList.add('hidden'); }, 1500);
        });
        setTimeout(function() { preloader.classList.add('hidden'); }, 3000);
    }

    // ============================================
    // NAVBAR SCROLL
    // ============================================
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

    // ============================================
    // BACK TO TOP
    // ============================================
    if (backToTop) {
        backToTop.addEventListener('click', function() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // ============================================
    // MOBILE MENU
    // ============================================
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

    // ============================================
    // SMOOTH SCROLL
    // ============================================
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

    // ============================================
    // SERVICE TABS
    // ============================================
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');

    tabBtns.forEach(function(btn) {
        btn.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');

            tabBtns.forEach(function(b) { b.classList.remove('active'); });
            tabContents.forEach(function(c) { c.classList.remove('active'); });

            this.classList.add('active');
            const targetTab = document.getElementById('tab-' + tabName);
            if (targetTab) targetTab.classList.add('active');
        });
    });

    // ============================================
    // HERO SLIDESHOW
    // ============================================
    const heroSlides = document.querySelectorAll('.hero-slide');
    if (heroSlides.length > 1) {
        let currentSlide = 0;
        setInterval(function() {
            heroSlides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % heroSlides.length;
            heroSlides[currentSlide].classList.add('active');
        }, 6000);
    }

    // ============================================
    // SCROLL ANIMATIONS
    // ============================================
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

    // ============================================
    // COUNTER ANIMATION
    // ============================================
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

    console.log('%c UPTOWN TRADING 460 CC ', 'background:#C8202A;color:white;font-size:20px;padding:10px;border-radius:5px;');
    console.log('%c Building South Africa\'s Future ', 'color:#1A1A2E;font-size:14px;');
    console.log('%c Image fallback system active ✓ ', 'background:#28a745;color:white;padding:5px;border-radius:3px;');
});
