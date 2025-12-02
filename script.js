// TYPEWRITER
const text = "Full Stack Web Developer | React.js • Django • Python";
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.querySelector(".typewriter").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, 60);
    }
}
window.onload = typeWriter;

// MOBILE MENU
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// AOS
AOS.init({ duration: 900, once: true });

// 3D TILT
VanillaTilt.init(document.querySelectorAll(".tilt"), {
    max: 15,
    speed: 400,
    glare: true,
    "max-glare": 0.3,
});

// PARTICLES
particlesJS("particles-js", {
    particles: {
        number: { value: 70 },
        color: { value: "#00A8FF" },
        opacity: { value: 0.4 },
        size: { value: 3 },
        line_linked: { enable: true, opacity: 0.2, color: "#00A8FF" },
        move: { speed: 1.2 }
    }
});
