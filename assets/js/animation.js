/* AÉTHER STUDIO - GSAP and AOS Animation Logic */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Initialize Custom Mouse Cursor Follower
    initCustomCursor();

    // 2. Sticky Navbar scroll trigger
    initNavbarScroll();

    // 3. Register GSAP ScrollTrigger
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);
    }

    // 4. Preloader and Page Entrances
    runPreloaderAndEntrances();
    
    // 5. Setup Scroll Triggers (Parallax & Reveals)
    initScrollTriggers();

    // 6. Micro Interactions
    initMicroInteractions();
});

// 1. Custom Mouse Cursor Follower
function initCustomCursor() {
    const dot = document.querySelector('.custom-cursor-dot');
    const ring = document.querySelector('.custom-cursor-ring');

    if (!dot || !ring) return;

    let mouseX = 0, mouseY = 0;
    let dotX = 0, dotY = 0;
    let ringX = 0, ringY = 0;

    // Follow mouse coordinates
    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Lerp animation for smooth follow
    function animateCursor() {
        // Dot follows instantly
        dotX += (mouseX - dotX) * 0.3;
        dotY += (mouseY - dotY) * 0.3;
        dot.style.left = `${dotX}px`;
        dot.style.top = `${dotY}px`;

        // Ring follows with a lag (lerp)
        ringX += (mouseX - ringX) * 0.12;
        ringY += (mouseY - ringY) * 0.12;
        ring.style.left = `${ringX}px`;
        ring.style.top = `${ringY}px`;

        requestAnimationFrame(animateCursor);
    }
    animateCursor();

    // Hover states for link elements
    const links = document.querySelectorAll('a, button, input, select, textarea, .cursor-pointer, .color-chip, .size-chip');
    links.forEach(link => {
        link.addEventListener('mouseenter', () => {
            document.body.classList.add('hovering-link');
            gsap.to(dot, { scale: 1.5, duration: 0.2 });
            gsap.to(ring, { scale: 0.8, duration: 0.2 });
        });
        link.addEventListener('mouseleave', () => {
            document.body.classList.remove('hovering-link');
            gsap.to(dot, { scale: 1, duration: 0.2 });
            gsap.to(ring, { scale: 1, duration: 0.2 });
        });
    });

    // Hide cursor when leaving window
    document.addEventListener('mouseleave', () => {
        dot.style.opacity = '0';
        ring.style.opacity = '0';
    });
    document.addEventListener('mouseenter', () => {
        dot.style.opacity = '1';
        ring.style.opacity = '1';
    });
}

// 2. Sticky Navbar scroll trigger
function initNavbarScroll() {
    const navbar = document.querySelector('.luxury-navbar');
    if (!navbar) return;

    const handleScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('navbar-scrolled');
        } else {
            navbar.classList.remove('navbar-scrolled');
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger check immediately
}

// 3. Preloader and Page Entrances
function runPreloaderAndEntrances() {
    const preloader = document.getElementById('preloader');
    if (!preloader) {
        // If preloader element is absent on secondary pages, run entrance animations directly
        runHeroEntrances();
        initAOS();
        return;
    }

    // Split preloader text into span letters
    const logoText = preloader.querySelector('.preloader-logo');
    if (logoText) {
        const text = logoText.textContent.trim();
        logoText.innerHTML = text.split('').map(char => {
            if (char === ' ') return '&nbsp;';
            return `<span>${char}</span>`;
        }).join('');
    }

    if (typeof gsap === 'undefined') {
        // Fallback if GSAP fails to load
        setTimeout(() => {
            preloader.style.opacity = '0';
            setTimeout(() => {
                preloader.style.display = 'none';
                initAOS();
            }, 600);
        }, 1500);
        return;
    }

    const tl = gsap.timeline({
        onComplete: () => {
            preloader.style.display = 'none';
            // Trigger scroll animation check and entrance
            runHeroEntrances();
            initAOS();
        }
    });

    // 1. Reveal logo letters
    tl.to('.preloader-logo span', {
        y: '0%',
        opacity: 1,
        duration: 0.8,
        stagger: 0.05,
        ease: 'power3.out'
    });

    // 2. Draw progress line
    tl.to('.preloader-line', {
        scaleX: 1,
        duration: 0.8,
        ease: 'power2.inOut'
    }, '-=0.3');

    // 3. Slide preloader panel up
    tl.to(preloader, {
        yPercent: -100,
        duration: 1.1,
        ease: 'power4.inOut'
    }, '+=0.2');
}

// Hero entrances
function runHeroEntrances() {
    if (typeof gsap === 'undefined') return;

    // Hero title text lines split reveal
    const subtitle = document.querySelector('.hero-subtitle');
    const title = document.querySelector('.hero-title');
    const desc = document.querySelector('.hero-desc');
    const cta = document.querySelector('.hero-left-content .btn-dark-luxury');
    const imgCover = document.querySelector('.hero-img-cover-reveal');
    const heroImg = document.querySelector('.hero-image-reveal');
    const navbar = document.querySelector('.luxury-navbar');

    const heroTl = gsap.timeline();

    // Unveil Navbar
    if (navbar) {
        heroTl.fromTo(navbar, { opacity: 0, y: -20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' });
    }

    // Unveil image
    if (imgCover && heroImg) {
        heroTl.to(imgCover, {
            scaleX: 0,
            duration: 1.2,
            ease: 'power4.inOut'
        }, '-=0.5');
        heroTl.to(heroImg, {
            scale: 1,
            duration: 1.5,
            ease: 'power3.out'
        }, '-=1.2');
    }

    // Reveal text elements on left
    if (subtitle) {
        heroTl.fromTo(subtitle, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.8');
    }
    if (title) {
        heroTl.fromTo(title, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.6');
    }
    if (desc) {
        heroTl.fromTo(desc, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.4');
    }
    if (cta) {
        heroTl.fromTo(cta, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.3');
    }
}

// Initialize AOS Scroll Reveal
function initAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 1000,
            easing: 'ease-out-cubic',
            once: true,
            offset: 120
        });
    }
}

// 4. ScrollTriggers (Parallax & Reveals)
function initScrollTriggers() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

    // Widescreen Parallax Banner
    const parallaxBg = document.querySelector('.parallax-bg');
    if (parallaxBg) {
        gsap.to(parallaxBg, {
            y: '15%',
            ease: 'none',
            scrollTrigger: {
                trigger: '.parallax-banner-section',
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
            }
        });
    }

    // Scroll Fade in for general headers
    const headers = document.querySelectorAll('.section-header');
    headers.forEach(header => {
        gsap.fromTo(header, {
            opacity: 0,
            y: 40
        }, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: header,
                start: 'top 85%'
            }
        });
    });
}

// 5. Micro Interactions
function initMicroInteractions() {
    // Custom button click ripple effect
    const buttons = document.querySelectorAll('.btn-dark-luxury, .btn-outline-dark, .btn-gold-luxury');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            let x = e.clientX - e.target.getBoundingClientRect().left;
            let y = e.clientY - e.target.getBoundingClientRect().top;
            
            let ripple = document.createElement('span');
            ripple.style.position = 'absolute';
            ripple.style.background = 'rgba(255, 255, 255, 0.4)';
            if (this.classList.contains('btn-outline-dark') && !this.matches(':hover')) {
                ripple.style.background = 'rgba(17, 17, 17, 0.1)';
            }
            ripple.style.width = '100px';
            ripple.style.height = '100px';
            ripple.style.borderRadius = '50%';
            ripple.style.transform = 'translate(-50%, -50%) scale(0)';
            ripple.style.pointerEvents = 'none';
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            ripple.style.transition = 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.6s';
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.style.transform = 'translate(-50%, -50%) scale(3)';
                ripple.style.opacity = '0';
            }, 50);
            
            setTimeout(() => {
                ripple.remove();
            }, 650);
        });
    });

    // Custom stats/numbers counter triggers
    const counters = document.querySelectorAll('.animated-counter');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        if (isNaN(target)) return;

        if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
            const countObj = { val: 0 };
            gsap.to(countObj, {
                val: target,
                duration: 2,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: counter,
                    start: 'top 90%'
                },
                onUpdate: () => {
                    counter.innerText = Math.floor(countObj.val);
                }
            });
        } else {
            // Standard counter trigger
            counter.innerText = target;
        }
    });
}
