document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section[id]");
  const allNavLinks = document.querySelectorAll(".nav-link");
  const hamburger = document.querySelector(".hamburger");
  const sidebar = document.querySelector(".sidebar");
  const overlay = document.querySelector(".overlay");
  const form = document.querySelector(".contact-form");
  const sidebarLinks = document.querySelectorAll("#sidebarlist a");
  const toggleBtn = document.getElementById("toggleAbout");
  const fullText = document.querySelector(".about-long");
  const shortText = document.querySelector(".about-short");
 
  const imageSources = [
    "assets/Me/me.jpg",
    "assets/Me/me1.jpg",
    "assets/Me/me2.jpg",
    "assets/Me/me3.jpg",
    "assets/Me/me4.jpg"
  ];

  const leftImg = document.querySelector(".carousel-img.left");
  const centerImg = document.querySelector(".carousel-img.center");
  const rightImg = document.querySelector(".carousel-img.right");

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

  let currentIndex = 0;

  function updateCarousel() {
    const total = imageSources.length;

    const leftIndex = (currentIndex - 1 + total) % total;
    const centerIndex = currentIndex;
    const rightIndex = (currentIndex + 1) % total;

    leftImg.src = imageSources[leftIndex];
    centerImg.src = imageSources[centerIndex];
    rightImg.src = imageSources[rightIndex];
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % imageSources.length;
    updateCarousel();
  }

  updateCarousel();
  setInterval(nextSlide, 5000);

  toggleBtn.addEventListener("click", () => {
    fullText.classList.toggle("hidden");
    shortText.classList.toggle("hidden");

    if (fullText.classList.contains("hidden")) {
      toggleBtn.textContent = "Read More";
    } else {
      toggleBtn.textContent = "I don't want to read all that";
    }
  });

  // =======================
  // Fun Facts Rotator
  // =======================
  const facts = [
    "I'm a Mechatronic Engineering student at North West University",
    "I once built a photo gallery web app using Express and Cloudinary",
    "I'm currently learning JavaScript, Python and C",
    "More fluent in Delphi and SQL than I am in my mother tongue",
    "I love One Piece, Luffy will be the Pirate King",
    "I live on campus and I enjoy a minimalistic lifestyle",
    "I'm into fitness and consistently working on becoming a better version of myself",
    "I’m passionate about solving real-world problems with code and machines",
    "I grew up with three sisters, so I know how to survive chaos and negotiate with strong personalities",
    "Music is life",
    "Sustainability over capitalist greed",
    "Through my love for animals, I wanted to be a vet when I was young",
    "I'm starting to realize why all the great thinkers were ahead of their time",
    "Dedicated to Maths, but Physics is my mistress",
    "My portfolio website turns 2 this year"
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
