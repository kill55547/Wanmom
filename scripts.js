const messages = [
  "แม่คือดวงใจของลูก รักแม่มากที่สุดในโลก 🌸",
  "ขอบคุณแม่ที่รักและดูแลมาตลอด รักแม่ตลอดไป ❤️",
  "สุขสันต์วันแม่ ขอให้แม่สุขภาพแข็งแรงและมีความสุขเสมอเลย 🎉",
  "คำพูดไม่พอที่จะบรรยายความรักที่มีให้แม่ รักแม่ที่สุดในโลกเลยครับ 💕"
];

let currentIndex = 0;

const messageEl = document.getElementById('message');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const randomBtn = document.getElementById('randomBtn');

function showMessage(index) {
  currentIndex = index;
  messageEl.textContent = messages[currentIndex];
}

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + messages.length) % messages.length;
  showMessage(currentIndex);
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % messages.length;
  showMessage(currentIndex);
});

randomBtn.addEventListener('click', () => {
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * messages.length);
  } while(randomIndex === currentIndex);
  showMessage(randomIndex);
});

showMessage(currentIndex);
