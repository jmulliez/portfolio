// script.js
document.addEventListener('DOMContentLoaded', () => {

    // 1. Glow orb tracking
    const orbs = document.querySelectorAll('.glow-orb');
    document.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;
        if (orbs[0]) orbs[0].style.transform = `translate(${x * 50}px, ${y * 50}px)`;
        if (orbs[1]) orbs[1].style.transform = `translate(${x * -30}px, ${y * -40}px)`;
        if (orbs[2]) orbs[2].style.transform = `translate(${x * 40}px, ${y * -20}px)`;
    });

    // 2. Card Hover Glow effect & 3D Tilt
    const cards = document.querySelectorAll('.glass-card');
    cards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);

            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            const rotateX = ((y - centerY) / centerY) * -5;
            const rotateY = ((x - centerX) / centerX) * 5;
            
            if(!card.classList.contains('header-box') && window.innerWidth > 768) {
                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
                card.style.zIndex = '10';
                card.style.transition = 'none';
            }
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
            card.style.zIndex = '1';
            card.style.transition = 'transform 0.4s ease, border-color 0.3s ease, background 0.3s ease';
        });
    });

    // 3. Typing effect for role
    const profileTitle = document.querySelector('.profile-title');
    if (profileTitle && !profileTitle.dataset.typed) {
        profileTitle.dataset.typed = 'true';
        const roleEl = document.querySelector('.current-box p');
        if(roleEl) {
            const text = roleEl.textContent.trim();
            roleEl.textContent = '';
            let i = 0;
            const type = () => {
                if (i < text.length) {
                    roleEl.textContent += text.charAt(i);
                    i++;
                    setTimeout(type, 30);
                }
            };
            setTimeout(type, 500);
        }
    }

    // 4. Project Filtering Logic
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-detail-card');
    if (filterBtns.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
                
                const filter = btn.dataset.filter.toUpperCase();
                
                projectCards.forEach(card => {
                    if (filter === 'ALL') {
                        card.style.display = 'flex';
                        setTimeout(() => card.style.opacity = '1', 50);
                    } else {
                        const tags = Array.from(card.querySelectorAll('.tag')).map(t => t.textContent.trim().toUpperCase());
                        let match = false;
                        if (filter === 'VBA' && (tags.includes('VBA') || tags.includes('EXCEL'))) match = true;
                        if (filter === 'PHP' && (tags.includes('PHP') || tags.includes('WEB'))) match = true;
                        if (filter === 'JAVA' && tags.includes('JAVA')) match = true;
                        if (filter === 'LINUX' && (tags.includes('LINUX') || tags.includes('DOCKER') || tags.includes('APACHE'))) match = true;
                        
                        if (match) {
                            card.style.display = 'flex';
                            setTimeout(() => card.style.opacity = '1', 50);
                        } else {
                            card.style.opacity = '0';
                            setTimeout(() => card.style.display = 'none', 300);
                        }
                    }
                });
            });
        });
    }

    // 5. Scroll Reveal & Dynamic Skills
    const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                
                const skillFills = entry.target.querySelectorAll('.progress-fill');
                skillFills.forEach(fill => {
                    const targetWidth = fill.getAttribute('data-width');
                    setTimeout(() => { fill.style.width = targetWidth; }, 300);
                });
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.bento-item').forEach((item, index) => {
        item.classList.add('reveal');
        if(index < 6) { item.style.transitionDelay = `${index * 0.1}s`; }
        revealObserver.observe(item);
    });

    // 6. Custom Glowing Cursor Trail
    if (window.innerWidth > 768) {
        const cursor = document.createElement('div');
        cursor.classList.add('custom-cursor');
        const trail = document.createElement('div');
        trail.classList.add('cursor-trail');
        
        document.body.appendChild(cursor);
        document.body.appendChild(trail);

        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let trailX = mouseX;
        let trailY = mouseY;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursor.style.left = `${mouseX}px`;
            cursor.style.top = `${mouseY}px`;
        });

        function animateCursor() {
            const speed = 0.2;
            trailX += (mouseX - trailX) * speed;
            trailY += (mouseY - trailY) * speed;
            trail.style.left = `${trailX}px`;
            trail.style.top = `${trailY}px`;
            requestAnimationFrame(animateCursor);
        }
        animateCursor();

        const interactables = document.querySelectorAll('a, button, .glass-card, .filter-btn');
        interactables.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursor.classList.add('hovering');
                trail.classList.add('hovering');
            });
            el.addEventListener('mouseleave', () => {
                cursor.classList.remove('hovering');
                trail.classList.remove('hovering');
            });
        });
    }

    // 7. Page Transition Overlay
    const transitionOverlay = document.createElement('div');
    transitionOverlay.classList.add('page-transition');
    document.body.appendChild(transitionOverlay);

    setTimeout(() => {
        transitionOverlay.classList.add('loaded');
    }, 100);

    document.querySelectorAll('a').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            const href = anchor.getAttribute('href');
            if (href && href.endsWith('.html') && anchor.target !== "_blank" && !href.startsWith('#')) {
                e.preventDefault();
                transitionOverlay.classList.remove('loaded');
                setTimeout(() => { window.location.href = href; }, 500);
            }
        });
    });

});
