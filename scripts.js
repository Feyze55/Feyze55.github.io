document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section[id]");
  const allNavLinks = document.querySelectorAll(".nav-link");
  const hamburger = document.querySelector(".hamburger");
  const sidebar = document.querySelector(".sidebar");
  const overlay = document.querySelector(".overlay");
  const form = document.querySelector(".contact-form");
  const sidebarLinks = document.querySelectorAll("#sidebarlist a");

  sidebarLinks.forEach(link => {
  link.addEventListener("click", () => {
    sidebar.classList.remove("show");
    overlay.classList.remove("show");
    });
  });
  
  form.addEventListener("submit", function (e) {
    setTimeout(() => {
      form.reset();
    }, 100); // delay helps avoid interfering with the submission
  });
  
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
  
  // Toggle the sidebar visibility
  function toggleSidebar() {
    sidebar.classList.toggle("show");
    overlay.classList.toggle("show");
  }

  // Close the sidebar when the overlay is clicked
  function closeSidebar() {
    sidebar.classList.remove("show");
    overlay.classList.remove("show");
  }

  // Event listener for hamburger button
  hamburger.addEventListener("click", toggleSidebar);

  // Event listener for overlay click to close sidebar
  overlay.addEventListener("click", closeSidebar);
  
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
    "I'm currently learning JavaScript, and C programming languages🤓",
    "I love watching shows: my favorites include The Office, The Big Bang Theory, and Trailer Park Boys ✨",
    "I live on campus and I enjoy a minimalistic lifestyle 🍳",
    "I'm into fitness and consistently working on becoming a better version of myself 💪",
    "I’m passionate about solving real-world problems with code and machines 🤖",
    "I grew up with three sisters, so I know how to survive chaos 📄",
    "One of my favorite songs is Hots Full of Love by Josh Rouse 🎶",
    "I'm all about living a sustainable and environmentally friendly life ♻️",
    "Through my love for animals, I wanted to be a vet when I was young 🐾",
    "I'm starting to realize why all the great thinkers were ahead of their time ",
    "Sustainability over capitalist greed"
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
