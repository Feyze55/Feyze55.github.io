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

  showNextFact(); // Show first fact immediately
  setInterval(showNextFact, 5000); // Change every 5 seconds
