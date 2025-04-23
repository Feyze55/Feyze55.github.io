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
    const sectionTop = section.offsetTop - 120; // Adjust this value if necessary
    const sectionHeight = section.offsetHeight;

    if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
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
  "I'm learning HTML, JavaScript, and C#—all at once 🤓",
  "I love watching shows—favorites include The Office, The Big Bang Theory, and Trailer Park Boys ✨",
  "I live on campus and survive with just a kettle and an air fryer 🍳",
  "I'm into fitness and constantly working on becoming a better version of myself 💪",
  "I believe compassion shouldn’t shrink just because a life form is small 🌱",
  "I’m passionate about solving real-world problems with code and machines 🤖",
  "I grew up with three sisters, so I know how to survive chaos 📄",
  "I once electrocuted myself trying to reinvent one of my toy cars ⚡",
  "One of my favorite songs is Hots Full of Love by Josh Rouse 🎶",
  "I'm all about living sustainably and embracing a minimalist lifestyle ♻️"
];

let currentFact = 0;
const factText = document.getElementById("fact-text");

function showNextFact() {
  factText.textContent = facts[currentFact];
  currentFact = (currentFact + 1) % facts.length;
}

document.addEventListener("DOMContentLoaded", () => {
  showNextFact(); // Display first fact immediately
  setInterval(showNextFact, 5000); // Rotate every 5 seconds
});
