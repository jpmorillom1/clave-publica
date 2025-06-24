// Matrix rain effect


// GSAP Animations
gsap.registerPlugin();

// Initial animation timeline
const tl = gsap.timeline();

// Animate header
tl.from(".header", {
    y: -100,
    opacity: 0,
    duration: 1,
    ease: "power3.out"
});

// Animate main title
tl.from(".main-title", {
    scale: 0.5,
    opacity: 0,
    duration: 1,
    ease: "back.out(1.7)"
}, "-=0.5");

// Animate cards
tl.from(".card", {
    y: 100,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: "power3.out"
}, "-=0.3");

// Animate floating shapes
gsap.to(".shape1", {
    x: "random(-50, 50)",
    y: "random(-50, 50)",
    rotation: 360,
    duration: 4,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

gsap.to(".shape2", {
    x: "random(-30, 30)",
    y: "random(-30, 30)",
    rotation: -360,
    duration: 6,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

gsap.to(".shape3", {
    x: "random(-40, 40)",
    y: "random(-40, 40)",
    rotation: 360,
    duration: 5,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut"
});

// Scroll animations
gsap.utils.toArray(".card").forEach((card, i) => {
    gsap.fromTo(card, 
        {
            opacity: 0,
            y: 50
        },
        {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
                trigger: card,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        }
    );
});

// Button hover effects
document.querySelectorAll('button').forEach(button => {
    button.addEventListener('mouseenter', () => {
        gsap.to(button, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out"
        });
    });

    button.addEventListener('mouseleave', () => {
        gsap.to(button, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
        });
    });
});

// Textarea focus animation
document.querySelectorAll('textarea').forEach(textarea => {
    textarea.addEventListener('focus', () => {
        gsap.to(textarea, {
            scale: 1.02,
            duration: 0.3,
            ease: "power2.out"
        });
    });

    textarea.addEventListener('blur', () => {
        gsap.to(textarea, {
            scale: 1,
            duration: 0.3,
            ease: "power2.out"
        });
    });
});

// Typewriter effect for code blocks
function typewriter(element, text, speed = 50) {
    let i = 0;
    element.textContent = '';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Particle system for enhanced visual effects
class Particle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.vx = (Math.random() - 0.5) * 2;
        this.vy = (Math.random() - 0.5) * 2;
        this.life = 1.0;
        this.decay = Math.random() * 0.02 + 0.005;
    }

    update() {
        this.x += this.vx;
        this.y += this.vy;
        this.life -= this.decay;
    }

    draw(ctx) {
        ctx.save();
        ctx.globalAlpha = this.life;
        ctx.fillStyle = '#4ecdc4';
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }
}

// Resize handler
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

// Enhanced loading animation
window.addEventListener('load', () => {
    gsap.to("body", {
        opacity: 1,
        duration: 0.5,
        ease: "power2.out"
    });
});