document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.getElementById("hamburger");
  const sidebar = document.getElementById("sidebar");
  const overlay = document.getElementById("overlay");
  const navLinks = document.querySelectorAll(".sidebar .nav-link");
  const sections = document.querySelectorAll("section[id]");
  const allNavLinks = document.querySelectorAll(".nav-link");

  document.getElementById("hamburger").addEventListener("click", function() {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("active");
  });
  
  // Toggle the sidebar and overlay visibility
  function toggleMenu() {
    if (sidebar && overlay) {
      sidebar.classList.toggle("show");
      overlay.classList.toggle("show");
    }
  }

  // Close the sidebar and overlay
  function closeMenu() {
    if (sidebar && overlay) {
      sidebar.classList.remove("show");
      overlay.classList.remove("show");
    }
  }

  if (hamburger && overlay && sidebar) {
    hamburger.addEventListener("click", toggleMenu);
    overlay.addEventListener("click", closeMenu);
    navLinks.forEach(link => link.addEventListener("click", closeMenu));
  }

  // =======================
  // Active Section Highlighter on Scroll
  // =======================
  function updateActiveLink() {
    let currentId = "";

    sections.forEach(section => {
      const sectionTop = section.offsetTop - 120;
      const sectionHeight = section.offsetHeight;

      if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
        currentId = section.id;
      }
    });

    allNavLinks.forEach(link => {
      const href = link.getAttribute("href");
      link.classList.toggle("active", href === `#${currentId}`);
    });
  }

  // Debounce scroll event to optimize performance
  let timeout;
  function debounce(func, delay) {
    clearTimeout(timeout);
    timeout = setTimeout(func, delay);
  }

  window.addEventListener("scroll", () => debounce(updateActiveLink, 100)); // 100ms debounce delay
  window.addEventListener("load", updateActiveLink); // Highlight on page load

  // =======================
  // Fun Facts Rotator
  // =======================
  const facts = [
    "I'm a Mechatronic Engineering student at North West University 🎓",
    "I once built a photo gallery web app using Express and Cloudinary 📸",
    "I'm learning HTML, JavaScript, and C#—all at once 🤓",
    "I love watching shows—favorites include The Office, The Big Bang Theory, and Trailer Park Boys ✨",
    "I live on campus and I enjoy a minimalistic lifestyle 🍳",
    "I'm into fitness and constantly working on becoming a better version of myself 💪",
    "I’m passionate about solving real-world problems with code and machines 🤖",
    "I grew up with three sisters, so I know how to survive chaos 📄",
    "One of my favorite songs is Hots Full of Love by Josh Rouse 🎶",
    "I'm all about living a sustainable and environmentally friendly life ♻️",
    "Through my love for animals, I considered being a vet when I was young 🐾"
  ];

  let currentFact = 0;
  const factText = document.getElementById("fact-text");

  function showNextFact() {
    if (factText) {
      factText.textContent = facts[currentFact];
      currentFact = (currentFact + 1) % facts.length;
    }
  }

  showNextFact(); // Show first fact
  setInterval(showNextFact, 5000); // Rotate every 5 seconds
});
