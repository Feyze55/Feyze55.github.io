// =======================
// Sidebar Menu Functionality
// =======================
const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");
const overlay = document.getElementById("overlay");
const navLinks = document.querySelectorAll(".sidebar .nav-link");

function toggleMenu() {
  sidebar.classList.toggle("show");
  overlay.classList.toggle("show");
}

function closeMenu() {
  sidebar.classList.remove("show");
  overlay.classList.remove("show");
}

hamburger.addEventListener("click", toggleMenu);
overlay.addEventListener("click", closeMenu);
navLinks.forEach(link => link.addEventListener("click", closeMenu));

// =======================
// Active Section Highlighter on Scroll
// =======================
const sections = document.querySelectorAll("section[id]");
const allNavLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
  let currentId = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 120;
    const sectionHeight = section.offsetHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      currentId = section.id;
    }
  });

  allNavLinks.forEach(link => {
    link.classList.toggle("active", link.getAttribute("href") === `#${currentId}`);
  });
});

// =======================
// Fun Facts Rotator
// =======================
const facts = [
  "I'm a Mechatronic Engineering student at NWU 🎓",
  "I once built a photo gallery web app using Express and Cloudinary 📸",
  "I'm learning Python, JavaScript, and C#—at the same time 🤓",
  "Big fan of functional UIs and clean CSS ✨",
  "I live on campus and survive with just a kettle and air fryer 🍳",
  "I’m into fitness and improving myself every day 💪",
  "I’m working toward solving real-world problems through code and machines 🤖",
  "I’ve built an infinite scroll feature using EJS and Multer 📄",
  "I’m learning circuits using a 555 timer and oscilloscope ⚡",
  "One of my favorite songs is *Hearts Full of Love* by Josh Rouse 🎶"
];

let currentFact = 0;
const factText = document.getElementById("fact-text");

function showNextFact() {
  factText.textContent = facts[currentFact];
  currentFact = (currentFact + 1) % facts.length;
}

showNextFact(); // Display first fact
setInterval(showNextFact, 5000); // Rotate every 5 seconds
