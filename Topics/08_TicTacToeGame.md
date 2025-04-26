### HTML

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>TicTacToe Game</title>
  </head>
  <body>
    <div class="game">
      <h1 class="title">Tic Tac Toe Game</h1>

      <div class="choose">
        <h2>Choose a mark</h2>
        <div class="marks">
          <div class="mark" id="X">X</div>
          <div class="mark" id="O">O</div>
        </div>
      </div>

      <div class="container">
        <div class="board">
          <div class="row1">
            <div class="box" id="0"></div>
            <div class="box" id="1"></div>
            <div class="box" id="2"></div>
          </div>
          <div class="row2">
            <div class="box" id="3"></div>
            <div class="box" id="4"></div>
            <div class="box" id="5"></div>
          </div>
          <div class="row3">
            <div class="box" id="6"></div>
            <div class="box" id="7"></div>
            <div class="box" id="8"></div>
          </div>
        </div>
        <h2 class="message"></h2>
        <button class="reset"></button>
      </div>
    </div>

    <script src="script.js"></script>
  </body>
</html>


```

### CSS

```CSS
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: sans-serif;
  text-align: center;
  background-color: #f0f0f0;
}

.game {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 100px;
}

.choose,
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  padding: 20px;
}

.marks {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 10px;
}

.mark {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 60px;
  border: 2px solid black;
  border-radius: 8px;
  margin: 5px;
  font-size: 28px;
  font-weight: bold;
  cursor: pointer;
  background-color: white;
  transition: transform 0.2s;
}

.mark:hover {
  transform: scale(1.1);
  background-color: #87f768;
}

.board {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  border-radius: 10px;
  padding: 15px;
  background-color: rgb(73, 92, 143);
}

.row1,
.row2,
.row3 {
  display: flex;
}

.box {
  height: 90px;
  width: 90px;
  border: 1px solid black;
  border-radius: 5px;
  margin: 5px;
  font-size: 40px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  background-color: #fff;
  transition: background-color 0.2s;
}

.box:hover {
  background-color: #9bf56b;
}

.text {
  font-size: 50px;
}

.message {
  margin-top: 20px;
  font-size: 24px;
  font-weight: bold;
  color: #333;
}

.reset {
  margin-top: 20px;
  padding: 5px;
  font-size: 12px;
  font-weight: bold;
  color: #333;
  cursor: pointer;
  border-radius: 5px;
  border: 1px solid black;
}

.reset:hover {
  background-color: #49a3f8;
  scale: 1.1;
  color: white;
  transition: scale 0.2s ease-in-out;
}

/* Responsive Design */
@media (max-width: 600px) {
  .box {
    height: 70px;
    width: 70px;
    font-size: 30px;
  }

  .mark {
    height: 50px;
    width: 50px;
    font-size: 24px;
  }

  .message {
    font-size: 20px;
  }

  .title {
    font-size: 16px;
  }
}

```

### JavaScript

```JS
let start = true;
let player1Mark;
let player2Mark;
let player1 = true;
let filledPositions = [];
let gameOver = false;
let reset = false;

let winPatterns = [
  ["0", "1", "2"],
  ["3", "4", "5"],
  ["6", "7", "8"],
  ["0", "3", "6"],
  ["1", "4", "7"],
  ["2", "5", "8"],
  ["0", "4", "8"],
  ["2", "4", "6"],
];

// Initially hide game board
if (start) {
  document.querySelector(".container").style.display = "none";
}

// Mark selection
let mark = document.querySelectorAll(".mark");
mark.forEach((item) => {
  item.addEventListener("click", () => {
    player1Mark = item.getAttribute("id");
    player2Mark = player1Mark === "X" ? "O" : "X";

    start = false;
    document.querySelector(".choose").style.display = "none";
    document.querySelector(".container").style.display = "flex";
    document.body.querySelector(".reset").style.display = "none";
  });
});

// Game board click logic
let boxes = document.querySelectorAll(".box");
boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (gameOver) return;

    let id = box.getAttribute("id");
    if (filledPositions.includes(id)) {
      alert("This box is already filled!");
      return;
    }

    if (player1) {
      box.innerHTML = player1Mark;
      box.style.color = "red";
    } else {
      box.innerHTML = player2Mark;
      box.style.color = "blue";
    }

    box.classList.add("text");
    filledPositions.push(id);

    checkWin(player1 ? player1Mark : player2Mark);
    player1 = !player1;
  });
});

// Check win logic
const checkWin = (playerMark) => {
  let won = false;

  winPatterns.forEach((pattern) => {
    let [a, b, c] = pattern;
    if (
      document.getElementById(a).innerHTML === playerMark &&
      document.getElementById(b).innerHTML === playerMark &&
      document.getElementById(c).innerHTML === playerMark
    ) {
      won = true;
    }
  });

  if (won) {
    document.querySelector(".message").innerHTML =
      playerMark === player1Mark ? "Player 1 Wins!" : "Player 2 Wins!";
    gameOver = true;
    document.body.querySelector(".reset").style.display = "block";
    document.body.querySelector(".reset").innerHTML = "Play Again!!!";

    return;
  }

  if (filledPositions.length === 9) {
    document.querySelector(".message").innerHTML = "DRAW";
    gameOver = true;
    // also button for draw
    document.body.querySelector(".reset").style.display = "block";
    document.body.querySelector(".reset").innerHTML = "Play Again!!!";
  }
};

// Reset game
let btn = document.body.querySelector(".reset");
btn.addEventListener("click", () => {
  window.location.reload();
});

```
