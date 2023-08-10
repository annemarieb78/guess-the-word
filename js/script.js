const guessedLetters = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const guessText = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const span = document.querySelector("span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");
const word = "magnolia";

const placeholder = function (word) {
  const letterPlaceholder = [];
  for (const letter of word) {
    console.log(letter);
    letterPlaceholder.push("●");
  }
  wordInProgress.innerText = letterPlaceholder.join("");
};

placeholder(word);

guessButton.addEventListener("click", function (e) {
  e.preventDefault();
  const guess = guessText.value;
  console.log(guess);
  guessText.value = "";
});
