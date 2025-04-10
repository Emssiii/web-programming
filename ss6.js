
const rgbDisplay = document.getElementById('rgbDisplay');
const choicesContainer = document.getElementById('choicesContainer');
const message = document.getElementById('message');
const livesDisplay = document.getElementById('lives');
const scoreDisplay = document.getElementById('score');
const restartBtn = document.getElementById('restartBtn');


let score = 0;
let lives = 3;
let correctColor = '';


function randomRGB() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}


function startRound() {
  choicesContainer.innerHTML = '';
  message.textContent = '';
  const options = [];


  correctColor = randomRGB();
  rgbDisplay.textContent = correctColor.toUpperCase();

 
  const correctIndex = Math.floor(Math.random() * 3);
  for (let i = 0; i < 3; i++) {
    if (i === correctIndex) {
      options.push(correctColor);
    } else {
      let newColor;
      do {
        newColor = randomRGB();
      } while (newColor === correctColor); 
      options.push(newColor);
    }
  }


  options.forEach(color => {
    const div = document.createElement('div');
    div.classList.add('colorOption');
    div.style.backgroundColor = color;
    div.addEventListener('click', () => handleChoice(color));
    choicesContainer.appendChild(div);
  });
}


function handleChoice(choice) {
  if (choice === correctColor) {
    message.textContent = 'Correct!';
    score++;
  } else {
    message.textContent = 'Wrong!';
    lives--;
  }

  updateStatus();


  if (lives <= 0) {
    message.textContent = 'Game Over!';
    choicesContainer.innerHTML = '';
    restartBtn.style.display = 'inline-block';
  } else {
    setTimeout(startRound, 1000);
  }
}


function updateStatus() {
  livesDisplay.textContent = lives;
  scoreDisplay.textContent = score;
}


restartBtn.addEventListener('click', () => {
  score = 0;
  lives = 3;
  restartBtn.style.display = 'none';
  updateStatus();
  startRound();
});


startRound();
