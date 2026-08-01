const config = {
  // Customize: Update this with the date you first met each other.
  metDate: "2026-03-15T00:00:00",
  // Customize: Update this label if you want a different display format.
  metDateLabel: "March 15, 2026",
};

const envelopeButton = document.querySelector(".envelope");
const letter = document.querySelector(".love-letter");
const heartsContainer = document.querySelector(".floating-hearts");
const petalsContainer = document.querySelector(".petals");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const metDateLabel = document.getElementById("met-date-label");
const sealLabel = document.querySelector(".seal");
const loveSong = document.getElementById("love-song");
const musicToggle = document.getElementById("music-toggle");
const musicStatus = document.getElementById("music-status");

function createFloatingDecor(container, items, count, className) {
  for (let index = 0; index < count; index += 1) {
    const element = document.createElement("span");
    element.className = className;
    element.textContent = items[index % items.length];
    element.style.left = `${Math.random() * 100}%`;
    element.style.animationDuration = `${8 + Math.random() * 12}s`;
    element.style.animationDelay = `${Math.random() * -18}s`;
    element.style.opacity = `${0.18 + Math.random() * 0.4}`;
    container.appendChild(element);
  }
}

function createPetals(count) {
  for (let index = 0; index < count; index += 1) {
    const petal = document.createElement("span");
    petal.style.left = `${Math.random() * 100}%`;
    petal.style.animationDuration = `${10 + Math.random() * 14}s`;
    petal.style.animationDelay = `${Math.random() * -20}s`;
    petal.style.opacity = `${0.15 + Math.random() * 0.35}`;
    petal.style.transform = `scale(${0.8 + Math.random() * 0.9})`;
    petalsContainer.appendChild(petal);
  }
}

function updateTimer() {
  const start = new Date(config.metDate);
  const now = new Date();

  if (Number.isNaN(start.getTime())) {
    return;
  }

  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();
  let days = now.getDate() - start.getDate();

  if (days < 0) {
    const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    days += previousMonth;
    months -= 1;
  }

  if (months < 0) {
    months += 12;
    years -= 1;
  }

  const diffMs = now - start;
  const hours = diffMs > 0 ? Math.floor(diffMs / (1000 * 60 * 60)) % 24 : 0;

  document.getElementById("years").textContent = Math.max(years, 0);
  document.getElementById("months").textContent = Math.max(months, 0);
  document.getElementById("days").textContent = Math.max(days, 0);
  document.getElementById("hours").textContent = hours;
}

function setupEnvelope() {
  envelopeButton?.addEventListener("click", () => {
    const isOpen = envelopeButton.classList.toggle("is-open");
    envelopeButton.setAttribute("aria-expanded", String(isOpen));
    letter?.classList.toggle("is-visible", isOpen);
    if (sealLabel) {
      sealLabel.textContent = isOpen ? "Madam Jii" : "Open Me";
    }

    if (isOpen) {
      letter?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  });
}

function setupMobileMenu() {
  menuToggle?.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  navLinks?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
      menuToggle?.setAttribute("aria-expanded", "false");
    });
  });
}

function setupMusic() {
  function setMusicState(isPlaying) {
    if (!musicToggle || !musicStatus) {
      return;
    }

    musicToggle.textContent = isPlaying ? "Pause Our Song" : "Play Our Song";
    musicToggle.setAttribute("aria-pressed", String(isPlaying));
    musicStatus.textContent = isPlaying
      ? "Samjhawan is playing for you."
      : "Press play when the moment feels right.";
  }

  musicToggle?.addEventListener("click", async () => {
    if (!loveSong) {
      return;
    }

    if (loveSong.paused) {
      try {
        await loveSong.play();
      } catch {
        musicStatus.textContent = "The song could not start. Please try once more.";
      }
      return;
    }

    loveSong.pause();
  });

  loveSong?.addEventListener("play", () => setMusicState(true));
  loveSong?.addEventListener("pause", () => setMusicState(false));
  loveSong?.addEventListener("error", () => {
    if (musicStatus) {
      musicStatus.textContent = "The song file could not be found.";
    }
  });
}

function setupConfig() {
  if (metDateLabel) {
    metDateLabel.textContent = config.metDateLabel;
  }
}

createFloatingDecor(heartsContainer, ["❤", "♥", "♡"], 18, "heart");
createPetals(16);
setupEnvelope();
setupMobileMenu();
setupMusic();
setupConfig();
updateTimer();
setInterval(updateTimer, 1000 * 60);
