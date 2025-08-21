let current = 0;
let score = 0;
let timer;
let timerSeconds = 15;
let questions = [];

// Called after loading questions dynamically
function initQuiz() {
  current = 0;
  score = 0;
  questions = shuffle([...questions]); // 🔁 copy and shuffle
  document.getElementById("quiz-box").classList.remove("hidden");
  document.getElementById("resultBox").classList.add("hidden");
  loadQuestion();
}

function loadQuestion() {
  if (current >= questions.length) {
    showResult();
    return;
  }

  const q = questions[current];
  document.getElementById("questionCounter").innerText = current + 1;
  document.getElementById("questionText").innerText = q.q;
  const optionsDiv = document.getElementById("optionsContainer");
  optionsDiv.innerHTML = "";

  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.innerText = opt;
    btn.onclick = () => handleAnswer(i);
    optionsDiv.appendChild(btn);
  });

  startTimer();
}

function startTimer() {
  timerSeconds = 15;
  document.getElementById("timer").innerText = timerSeconds;
  clearInterval(timer);
  timer = setInterval(() => {
    timerSeconds--;
    document.getElementById("timer").innerText = timerSeconds;
    if (timerSeconds <= 0) {
      clearInterval(timer);
      current++;
      loadQuestion();
    }
  }, 1000);
}

function handleAnswer(selected) {
  clearInterval(timer);
  if (selected === questions[current].answer) score++;
  current++;
  loadQuestion();
}

function showResult() {
  document.getElementById("quiz-box").classList.add("hidden");
  const res = document.getElementById("resultBox");
  res.classList.remove("hidden");
  res.innerHTML = `
    <h3>✅ Quiz Complete</h3>
    <p>You scored <strong>${score}</strong> out of <strong>${questions.length}</strong></p>
    <button onclick="location.reload()">🔁 Try Another Tool</button>
  `;

  if (score === questions.length) {
    showCelebration();
  }
}
function showCelebration() {
  const celebrateBox = document.createElement("div");
  celebrateBox.id = "celebration";
  celebrateBox.innerHTML = `
    <div>
      🎉🎈 <span>Congratulations!</span><br>
      You scored 10/10! You're a DevOps Pro 💪<br><br>
      <button onclick="removeCelebration()">OK</button>
    </div>
  `;
  document.body.appendChild(celebrateBox);

  let interval = setInterval(() => {
    const emoji = document.createElement('div');
    emoji.innerText = Math.random() > 0.5 ? '🎈' : '🎊';
    emoji.style.position = 'fixed';
    emoji.style.left = Math.random() * 100 + 'vw';
    emoji.style.top = '0px';
    emoji.style.fontSize = '2em';
    emoji.style.animation = 'fall 3s linear forwards';
    document.body.appendChild(emoji);
    setTimeout(() => emoji.remove(), 3000);
  }, 200);

  setTimeout(() => clearInterval(interval), 3000);
}


function removeCelebration() {
  const c = document.getElementById("celebration");
  if (c) c.remove();
}

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// tested

function loadQuestion() {
  if (current >= questions.length) {
    showResult();
    return;
  }

  const q = questions[current];
  document.getElementById("questionCounter").innerText = current + 1;
  // Question ke aage number add kar do
  document.getElementById("questionText").innerText = `${current + 1}. ${q.q}`;

  const optionsDiv = document.getElementById("optionsContainer");
  optionsDiv.innerHTML = "";

  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    const label = String.fromCharCode(65 + i); // 65 -> A, 66 -> B...
    btn.innerText = `${label}. ${opt}`;
    btn.onclick = () => handleAnswer(i);
    optionsDiv.appendChild(btn);
  });

  startTimer();
}
