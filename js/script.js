// Query Selectors
const wordText = document.querySelector(".word"),
  hintText = document.querySelector(".hint span"),
  timeText = document.querySelector(".time b"),
  inputField = document.querySelector("input"),
  refreshBtn = document.querySelector(".refresh-word"),
  checkBtn = document.querySelector(".check-word");
const messageElement = document.getElementById("message");
const scoreText = document.querySelector(".score b");
const scoreWords = [
  "Amazing",
  "Wonderful",
  "Wordlicious",
  "Incredible",
  "Fantastic",
  "Superb",
  "Outstanding",
  "Excellent",
  "Impressive",
  "Spectacular",
];

let score = 0;
let correctWord;
let timer;

// Utility Functions

// Shuffle Array Function
// Generics: This function is generalized to handle any array input.
const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

// Timer Initialization Function
// Concurrency and Concurrency Management: The timer logic ensures that the countdown runs concurrently with the game logic.
const initTimer = (maxTime) => {
  clearInterval(timer);
  timer = setInterval(() => {
    if (maxTime > 0) {
      maxTime--;
      timeText.innerText = maxTime;
    } else {
      clearInterval(timer);
      messageElement.innerHTML = `Time off! <span style="color: #39A7FF; background-color: #EEF5FF;">${correctWord.toUpperCase()}</span> was the correct word`;
      inputField.style.display = "none";
      setTimeout(() => {
        initGame();
        inputField.style.display = "block";
      }, 1500);
    }
  }, 1000);
};

// Game Initialization Function
// Refactoring: Code is modularized into small functions for clarity and reusability.
const initGame = () => {
  initTimer(30);
  const randomIndex = Math.floor(Math.random() * words.length);
  const randomObj = words[randomIndex];
  const wordArray = shuffleArray(randomObj.word.split(""));
  wordText.innerText = wordArray.join("");
  hintText.innerText = randomObj.hint;
  correctWord = randomObj.word.toLowerCase();
  inputField.value = "";
  inputField.setAttribute("maxlength", correctWord.length);
  inputField.className = "";

  const wordClass = classifyWord(correctWord);
  displayWordClass(wordClass);
  messageElement.textContent = "";
};

// Word Classification Function
// Single Responsibility Principle (SRP): This function is responsible only for classifying the word based on its length and character repetition.
const classifyWord = (word) => {
  const length = word.length;
  const repeatingCharacters = /([a-zA-Z]).*?\1/.test(word);
  if (length <= 4 || repeatingCharacters) return "common";
  if (length <= 6) return "rare";
  if (length <= 8) return "exclusive";
  return "legendary";
};

// Display Word Class Function
// Open/Closed Principle (OCP): This function is open for extension (you can add more word classes) but closed for modification (no need to change existing logic).
const displayWordClass = (wordClass) => {
  const wordClassElement = document.querySelector(".word-class");
  wordClassElement.innerText = wordClass;

  const styles = {
    common: { color: "black", backgroundColor: "lightblue" },
    rare: { color: "white", backgroundColor: "red" },
    exclusive: { color: "black", backgroundColor: "gold" },
    legendary: { color: "white", backgroundColor: "purple" },
  };

  wordClassElement.style.color = styles[wordClass].color;
  wordClassElement.style.backgroundColor = styles[wordClass].backgroundColor;
};

// Update Score Color Function
const updateScoreColor = () => {
  const labelElement = document.getElementById("scoreLabel");
  const scoreValueElement = document.getElementById("scoreValue");
  const displayWord = scoreWords.length > 0 ? scoreWords[Math.floor(Math.random() * scoreWords.length)] : "No words available";

  scoreValueElement.classList.add("show-word");
  scoreValueElement.innerHTML = `<span style="font-size: 1.1em">${displayWord}</span>`;
  labelElement.style.display = "none";

  setTimeout(() => {
    scoreValueElement.innerHTML = score;
    labelElement.style.display = "inline";
    scoreValueElement.classList.remove("show-word");
  }, 1100);
};

// Check Word Function
// Exception Handling: The try-catch block handles user input errors.
const checkWord = () => {
  try {
    const userWord = inputField.value.toLowerCase();
    if (!userWord) {
      throw new Error("Please enter the word to check!");
    }
    if (userWord !== correctWord) {
      handleIncorrectWord();
      return;
    }
    handleCorrectWord();
  } catch (error) {
    handleError(error);
  }
};

// Handle Incorrect Word Function
const handleIncorrectWord = () => {
  inputField.classList.remove("correct");
  inputField.classList.add("incorrect");
  messageElement.textContent = "Oops! Try again.";
};

// Handle Correct Word Function
const handleCorrectWord = () => {
  inputField.classList.remove("incorrect");
  inputField.classList.add("correct");
  messageElement.textContent = `Yay, ${correctWord.toUpperCase()} is the correct word!`;
  updateScore(parseInt(timeText.innerText));
  updateScoreColor();
  setTimeout(initGame, 2000);
  inputField.style.display = "block";
};

// Update Score Function
const updateScore = (timeLeft) => {
  if (timeLeft > 25) score += 20;
  else if (timeLeft > 20) score += 17;
  else if (timeLeft > 15) score += 14;
  else if (timeLeft > 10) score += 13;
  else score += 10;

  scoreText.innerText = score;
};

// Handle Error Function
const handleError = (error) => {
  messageElement.textContent = error.message;
  inputField.classList.add("flash");
  setTimeout(() => {
    inputField.classList.remove("flash");
    messageElement.textContent = "";
  }, 2000);
};

// Event Listeners
refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);

// Keydown Event Listener
// Recursion: setTimeout creates a form of recursive delay to reset the game.
window.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    checkWord();
  }
  if (event.code === 'ControlRight') {
    initGame();
  }
});

// Initialize Game
// Mutability and Immutability: Immutable operations are used, such as using const for constants and creating new arrays with split and map.
initGame();
