const openButton = document.getElementById("openButton");
const opening = document.getElementById("opening");
const letterSection = document.getElementById("letterSection");

const letterText = document.getElementById("letterText");
const cursor = document.getElementById("cursor");

const frogArea = document.getElementById("frogArea");
const frogButton = document.getElementById("frogButton");
const frogMessage = document.getElementById("frogMessage");

const musicFrame = document.getElementById("musicFrame");

const videoID = "T1jK3pLOjY0";

const text = `Since the day we started dating, I knew that this was what I wanted from life. You brought nothing but happiness, love, and so many beautiful moments into my life. ❤️

I honestly can't believe that four months have passed so fast. It feels like it was just yesterday when we met, and you sent me that little message: "Why are you awake?" Hahah. I had no idea that those few words would start something so special. I still remember that moment very vividly, and I'm so glad I decided to answer you.

I'm so happy to be here with you — through the quiet moments, the stupid conversations, the moments when we're laughing so hard our stomachs hurt, and even the sad moments when life gets a little harder.

I want you to know that you never have to go through those difficult moments alone. I'll always be here for you, to listen to you, to make you laugh when I can, to hold your hand when things aren't easy, and to remind you that you're loved.

These four months may seem like a short time, but somehow you've already become such a big and important part of my life. And I can't wait to see all the memories, adventures, stupid jokes, late-night conversations, and random moments that are still waiting for us.

Thank you for being you. Thank you for choosing me. And thank you for making these four months so special.

I love you more than I can probably put into words. ❤️

And don't worry, I'm never gonna leave you alone.

Yes, that's both a threat and a promise. 😝❤️

Happy four months, my love.
Here's to many, many more. 🥂❤️`;

let started = false;

openButton.addEventListener("click", () => {
  if (started) return;

  started = true;

  musicFrame.src =
    `https://www.youtube.com/embed/${videoID}?autoplay=1&loop=1&playlist=${videoID}&controls=0&playsinline=1&rel=0`;

  opening.classList.add("hidden");
  letterSection.classList.remove("hidden");

  startTyping();
});

function startTyping() {
  let index = 0;

  const speed = 14;

  function typeNextCharacter() {
    if (index < text.length) {
      letterText.textContent += text.charAt(index);
      index++;

      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
      });

      setTimeout(typeNextCharacter, speed);
    } else {
      cursor.classList.add("hidden");

      setTimeout(() => {
        frogArea.classList.remove("hidden");

        frogArea.scrollIntoView({
          behavior: "smooth",
          block: "center"
        });
      }, 700);
    }
  }

  typeNextCharacter();
}

frogButton.addEventListener("click", () => {
  frogMessage.classList.toggle("hidden");
});
// 🐱🐸 RANDOM CAT & FROG GENERATOR

const chaosContainer = document.getElementById("chaosDecorations");

const animals = [
  "🐱",
  "🐱",
  "🐱",
  "🐈",
  "🐸",
  "🐸",
  "🐸",
  "🐊"
];

const chaosCount = 18;

for (let i = 0; i < chaosCount; i++) {
  const animal = document.createElement("div");

  animal.classList.add("chaos-animal");

  animal.textContent =
    animals[Math.floor(Math.random() * animals.length)];

  const size = Math.floor(Math.random() * 35) + 35;

  animal.style.fontSize = `${size}px`;

  animal.style.left = `${Math.random() * 94}%`;
  animal.style.top = `${Math.random() * 94}%`;

  animal.style.animationDuration =
    `${Math.floor(Math.random() * 5) + 5}s`;

  animal.style.animationDelay =
    `${Math.random() * 5}s`;

  chaosContainer.appendChild(animal);
}
