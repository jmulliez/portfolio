/* ------ SPEEDOMETER ------ */
const needle = document.getElementById('needle');
const speedVal = document.getElementById('speed-val');
const gearInd = document.getElementById('gear');

const maxSpeed = 360;
const minAngle = -90;
const maxAngle = 90;

window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.body.scrollHeight - window.innerHeight;
    let scrollPercent = scrollTop / docHeight;

    if (scrollPercent > 1) scrollPercent = 1;
    if (scrollPercent < 0) scrollPercent = 0;

    const currentSpeed = Math.floor(scrollPercent * maxSpeed);
    const currentAngle = minAngle + (scrollPercent * (maxAngle - minAngle));

    let currentGear = 'N';
    if (currentSpeed > 0 && currentSpeed < 50) currentGear = 1;
    else if (currentSpeed >= 50 && currentSpeed < 100) currentGear = 2;
    else if (currentSpeed >= 100 && currentSpeed < 150) currentGear = 3;
    else if (currentSpeed >= 150 && currentSpeed < 200) currentGear = 4;
    else if (currentSpeed >= 200 && currentSpeed < 250) currentGear = 5;
    else if (currentSpeed >= 250 && currentSpeed < 300) currentGear = 6;
    else if (currentSpeed >= 300 && currentSpeed < 340) currentGear = 7;
    else if (currentSpeed >= 340) currentGear = 8;

    if (currentSpeed === 0) currentGear = 'N';

    needle.style.transform = `rotate(${currentAngle}deg)`;
    speedVal.innerText = currentSpeed;
    gearInd.innerText = currentGear;

    if (currentGear === 8) {
        gearInd.style.color = 'red';
        gearInd.style.borderColor = 'red';
        gearInd.style.boxShadow = '0 0 15px rgba(255,0,0,0.6)';
    } else {
        gearInd.style.color = '#FFF200';
        gearInd.style.borderColor = '#FFF200';
        gearInd.style.boxShadow = '0 0 15px rgba(255,242,0,0.3)';
    }
});

/* ------ SCROLL REVEAL ------ */
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            // Stagger delay for siblings
            const siblings = Array.from(entry.target.parentElement.children);
            const idx = siblings.indexOf(entry.target);
            entry.target.style.transitionDelay = `${idx * 80}ms`;
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

document.querySelectorAll('.reveal, .reveal-left, .report-card, .season-header, .stat-card, .mission-card, .business-card, .presence-card').forEach(el => {
    if (!el.classList.contains('reveal') && !el.classList.contains('reveal-left')) {
        el.classList.add('reveal');
    }
    revealObserver.observe(el);
});

/* ------ TYPING EFFECT ------ */
const heroRole = document.querySelector('.hero-role');
if (heroRole) {
    const text = heroRole.textContent.trim();
    heroRole.textContent = '';
    heroRole.style.visibility = 'visible';
    let i = 0;
    const type = () => {
        if (i < text.length) {
            heroRole.textContent += text[i++];
            setTimeout(type, 55);
        }
    };
    setTimeout(type, 600);
}

/* ------ NAV ACTIVE ON SCROLL ------ */
const navLinks = document.querySelectorAll('.nav-link');
function setActiveNav() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}
setActiveNav();
