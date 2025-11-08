// =============================================
//  FULL script.js FOR BARATH THIRUMAL K PORTFOLIO
//  Works with: particles.js + Typed.js + All Animations
// =============================================

// 1. PARTICLES BACKGROUND
particlesJS("particles-js", {
    particles: {
        number: { value: 90, density: { enable: true, value_area: 800 } },
        color: { value: "#00ffff" },
        shape: { type: "circle" },
        opacity: { value: 0.6, random: true, anim: { enable: true, speed: 1 } },
        size: { value: 3, random: true },
        line_linked: {
            enable: true,
            distance: 150,
            color: "#00ffff",
            opacity: 0.3,
            width: 1
        },
        move: {
            enable: true,
            speed: 2,
            direction: "none",
            random: false,
            straight: false,
            out_mode: "out"
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
            resize: true
        },
        modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { particles_nb: 4 }
        }
    },
    retina_detect: true
});

// 2. TYPED.JS - Animated Text
new Typed(".typed-text span", {
    strings: [
        "clean websites",
        "fast web apps",
        "scalable backends",
        "pixel-perfect UIs",
        "your next hire"
    ],
    typeSpeed: 70,
    backSpeed: 40,
    backDelay: 1500,
    loop: true,
    showCursor: true,
    cursorChar: "|"
});

// 3. SKILLS PROGRESS BAR ANIMATION ON SCROLL
const skillCards = document.querySelectorAll('.skill-card');

const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const percent = entry.target.getAttribute('data-percent');
            const fill = entry.target.querySelector('.progress-fill');
            const percentText = entry.target.querySelector('.percent');

            // Animate width
            setTimeout(() => {
                fill.style.width = percent + '%';
            }, 300);

            // Animate number counting
            let start = 0;
            const end = parseInt(percent);
            const duration = 2000;
            const increment = end / (duration / 16);

            const timer = setInterval(() => {
                start += increment;
                if (start >= end) {
                    percentText.textContent = end + '%';
                    clearInterval(timer);
                } else {
                    percentText.textContent = Math.floor(start) + '%';
                }
            }, 16);

            // Stop observing after animation
            skillObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.6 });

skillCards.forEach(card => skillObserver.observe(card));

// 4. SMOOTH SCROLL FOR NAV LINKS
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 5. NAVBAR BACKGROUND ON SCROLL
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.backdropFilter = 'blur(20px)';
        navbar.style.borderBottom = '1px solid rgba(0, 255, 255, 0.3)';
    } else {
        navbar.style.background = 'transparent';
        navbar.style.backdropFilter = 'none';
        navbar.style.borderBottom = 'none';
    }
});

// 6. DARK/LIGHT MODE TOGGLE (Optional - Add button in HTML if you want)
const themeToggle = document.querySelector('.theme-toggle');
if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
        const icon = themeToggle.querySelector('i');
        if (document.body.classList.contains('light-mode')) {
            icon.classList.replace('fa-moon', 'fa-sun');
        } else {
            icon.classList.replace('fa-sun', 'fa-moon');
        }
    });
}

// MAGNETIC BUTTON EFFECT
const magneticBtn = document.getElementById('magneticBtn');
const magneticArea = document.querySelector('.magnetic-area');

magneticArea.addEventListener('mousemove', (e) => {
    const rect = magneticBtn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    
    magneticBtn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px) rotateX(${y * 0.1}deg) rotateY(${x * 0.1}deg)`;
});

magneticArea.addEventListener('mouseleave', () => {
    magneticBtn.style.transform = 'translate(0, 0) rotateX(0) rotateY(0)';
});

// OPEN/CLOSE CONTACT CARD
document.getElementById('magneticBtn').addEventListener('click', () => {
    document.getElementById('contactCard').classList.add('show');
    document.body.style.overflow = 'hidden';
});

document.getElementById('closeCard').addEventListener('click', () => {
    document.getElementById('contactCard').classList.remove('show');
    document.body.style.overflow = 'auto';
});

// Close on outside click
window.addEventListener('click', (e) => {
    const card = document.getElementById('contactCard');
    if (e.target === card) {
        card.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
});


// 7. ADD LIGHT MODE CSS (Optional - paste in style.css if using toggle)
/*
.light-mode {
    --bg: #f0f0f0;
    --text: #222;
    --card: rgba(0,0,0,0.05);
    --border: rgba(0,0,0,0.1);
}
.light-mode .navbar { background: rgba(255,255,255,0.9) !important; }
*/

// DONE! Your portfolio is now 100% ALIVE
console.log("%c Portfolio Loaded Successfully! Barath is ready to get hired!", "color: cyan; font-size: 16px; font-weight: bold;");