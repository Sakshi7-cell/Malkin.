// Malkin's birthday surprise: twinkling stars, open-when letters, memory constellation, and gift reveal.
document.addEventListener("DOMContentLoaded", () => {
  const starField = document.getElementById("starField");
  for (let i = 0; i < 105; i++) {
    const star = document.createElement("span");
    star.className = "star";
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    star.style.opacity = `${0.2 + Math.random() * 0.62}`;
    star.style.setProperty("--duration", `${2.5 + Math.random() * 5}s`);
    const size = Math.random() > 0.9 ? 3 : 2;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    starField.appendChild(star);
  }

  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  menuToggle.addEventListener("click", () => {
    const open = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    menuToggle.textContent = open ? "✕" : "☰";
  });
  navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  }));

  const letters = {
    smile: {
      symbol: "✧", title: "For your smile",
      message: "Tiny reminder, Malkin: you don't need a perfect day to find one good thing in it. Put on a song you love, get yourself a little treat, or remember the funniest thing you've heard lately. I hope this note gives you one small reason to smile. ♡"
    },
    miss: {
      symbol: "☾", title: "For when you miss me",
      message: "Miles and screens can make things feel a little strange sometimes. So here's a small reminder that a thoughtful message, a shared song, or a silly conversation can still make a day feel closer. Take your time, breathe, and know that you're being wished well from over here. ✨"
    },
    tough: {
      symbol: "✦", title: "For a tough day",
      message: "You don't have to have everything figured out today. Take one thing at a time, give yourself the same patience you'd give someone you care about, and remember that one hard day doesn't define your whole story. I hope tomorrow feels a little lighter. You deserve kindness, including from yourself. ♡"
    },
    birthday: {
      symbol: "♡", title: "It's your birthday!",
      message: "Birthday girl, this note is your official permission to enjoy the little things today. Eat something lovely, laugh at something ridiculous, play your favourite song, and let people celebrate you. I hope this next year brings you new adventures, gentle days, and happy surprises. Happy birthday, Malkin! 🎂"
    }
  };

  const dialog = document.getElementById("letterDialog");
  const dialogTitle = document.getElementById("dialogTitle");
  const dialogMessage = document.getElementById("dialogMessage");
  const dialogSymbol = document.getElementById("dialogSymbol");
  document.querySelectorAll("[data-letter]").forEach(button => {
    button.addEventListener("click", () => {
      const letter = letters[button.dataset.letter];
      if (!letter) return;
      dialogSymbol.textContent = letter.symbol;
      dialogTitle.textContent = letter.title;
      dialogMessage.textContent = letter.message;
      if (typeof dialog.showModal === "function") dialog.showModal();
      else alert(`${letter.title}\n\n${letter.message}`);
    });
  });
  document.getElementById("dialogClose").addEventListener("click", () => dialog.close());
  document.getElementById("dialogOkay").addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", event => {
    if (event.target === dialog) dialog.close();
  });

  const memoryCopy = {
    talks: ["Little talks", "The best conversations don't need a perfect topic. Sometimes a simple hello turns into a little highlight of the day."],
    laughs: ["Random laughs", "May there always be silly jokes, funny voice notes, and those moments when you laugh so much that explaining the joke becomes impossible."],
    surprises: ["Sweet surprises", "A small unexpected message, a favourite song, or a thoughtful detail can make an ordinary day feel special. Here's to more little surprises."],
    distance: ["Miles apart, still a thought", "A screen is how a conversation starts, not the whole story. I hope this little corner makes the distance feel a bit less noticeable today."],
    future: ["More memories ahead", "There are songs we haven't shared, stories we haven't told, and plenty of ordinary days still waiting to surprise us. One little moment at a time."]
  };
  const detail = document.getElementById("memoryDetail");
  document.querySelectorAll("[data-memory]").forEach(button => {
    button.addEventListener("click", () => {
      document.querySelectorAll("[data-memory]").forEach(star => star.classList.remove("active"));
      button.classList.add("active");
      const copy = memoryCopy[button.dataset.memory];
      detail.querySelector(".detail-title").textContent = copy[0];
      detail.querySelector(".detail-copy").textContent = copy[1];
      detail.querySelector(".detail-star").textContent = "✧";
    });
  });

  document.getElementById("giftButton").addEventListener("click", event => {
    const reveal = document.getElementById("giftReveal");
    reveal.hidden = false;
    event.currentTarget.textContent = "Gift opened ♡";
    event.currentTarget.disabled = true;
    event.currentTarget.style.opacity = ".7";
    sparkleBurst();
    reveal.scrollIntoView({ behavior: "smooth", block: "nearest" });
  });

  function sparkleBurst() {
    const symbols = ["✦", "♡", "✧", "✷"];
    const colors = ["#f2ca91", "#e9a2b4", "#fff7f5", "#c5b6ed"];
    for (let i = 0; i < 30; i++) {
      const spark = document.createElement("span");
      spark.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      spark.className = "burst-spark";
      spark.style.cssText = `position:fixed;left:${10 + Math.random() * 80}%;top:${18 + Math.random() * 65}%;z-index:30;pointer-events:none;color:${colors[i % colors.length]};font-size:${12 + Math.random() * 17}px;animation:fadeUp 1.25s ease-out forwards;`;
      document.body.appendChild(spark);
      setTimeout(() => spark.remove(), 1350);
    }
  }
});
