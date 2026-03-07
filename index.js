

// Typing effect
const text = "Production Manager | Future Tech Project Manager | Tech-mom";
let index = 0;

function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 50);
    }
}
window.onload = typeEffect;

// Scroll reveal
function revealOnScroll() {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach(section => {
        if (section.getBoundingClientRect().top < window.innerHeight - 100) {
            section.classList.add("active");
        }
    });

    // Animate skill bars
    document.querySelectorAll(".progress-bar").forEach(bar => {
        if (bar.getBoundingClientRect().top < window.innerHeight - 50) {
            bar.style.width = bar.dataset.width;
        }
    });
}
window.addEventListener("scroll", revealOnScroll);

// Dark mode toggle
document.getElementById("darkModeToggle")
    .addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
    });

// Modal
function openModal() {
    document.getElementById("experienceModal").style.display = "block";
}

function closeModal() {
    document.getElementById("experienceModal").style.display = "none";
}

function dynamicGreeting() {
    const greetingElement = document.getElementById("greeting");
    const now = new Date();
    const hour = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, "0");

    let message = "";
    let emoji = "";
    let color = "";

    if (hour < 12) {
        message = "Good Morning";
        emoji = "☀️";
        color = "#facc15"; // warm yellow
    } else if (hour < 18) {
        message = "Good Afternoon";
        emoji = "🌤️";
        color = "#38bdf8"; // blue
    } else {
        message = "Good Evening";
        emoji = "🌙";
        color = "#a855f7"; // purple
    }

    const fullMessage = `${message} ${emoji} | Local Time: ${hour}:${minutes}`;

    greetingElement.style.color = color;
    greetingElement.style.fontSize = "1.3rem";
    greetingElement.style.fontWeight = "600";
    greetingElement.style.opacity = "0";

    typeGreeting(fullMessage, greetingElement);
}

function typeGreeting(text, element) {
    let index = 0;

    function type() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(type, 40);
        }
    }

    element.style.transition = "opacity 1s ease";
    element.style.opacity = "1";
    type();
}

dynamicGreeting();