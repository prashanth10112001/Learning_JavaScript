### HTML

```HTML
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="style.css" />
    <title>Rock Paper Scissors</title>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <div><h1>Rock Paper Scissors</h1></div>
        <div><span class="reload">&#x21bb;</span></div>
      </div>

      <div class="choices">
        <div class="choice" id="rock">
          <div class="img">&#129704;</div>
          <div class="choiceText">Rock</div>
        </div>
        <div class="choice" id="paper">
          <div class="img">&#128196;</div>
          <div class="choiceText">Paper</div>
        </div>
        <div class="choice" id="scissors">
          <div class="img">&#x2702;</div>
          <div class="choiceText">Scissors</div>
        </div>
      </div>

      <div class="message"></div>

      <div class="results">
        <div class="weapons">
          <div>User weapon :</div>
          <div id="playerChoice"></div>
        </div>

        <div class="weapons">
          <div>System weapon :</div>
          <div id="computerChoice"></div>
        </div>
      </div>

      <div class="score">
        <div id="playerScore">
          Player Score: <span class="playerScore">0</span>
        </div>
        <div id="computerScore">
          Computer Score: <span class="computerScore">0</span>
        </div>
      </div>
    </div>
    <script src="script.js"></script>
  </body>
</html>


```

### CSS

```CSS
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to bottom, rgb(255, 255, 255), rgb(73, 207, 244));
  height: 100vh;
}

.header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 10px;
}

.header :nth-child(2) {
  margin-top: 10px;
  cursor: pointer;
}

.header :nth-child(2):hover {
  scale: 1.2;
  transition: all 0.4s ease-in-out;
}

.reload {
  font-family: Lucida Sans Unicode;
  font-size: 20px;
}

.choices {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
}

.choice {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
}

.choice:hover {
  cursor: pointer;
  scale: 0.8;
  transition: all 0.4s ease-in-out;
}

.img {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 150px;
  width: 150px;
  padding: 10px;
  border: 4px solid black;
  border-radius: 50%;
  font-size: 50px;
}

#rock .img:hover {
  background-color: rgb(107, 112, 112);
}

#paper .img:hover {
  background-color: rgb(255, 255, 255);
}

#scissors .img:hover {
  background-color: rgb(73, 207, 244);
}

.choiceText {
  font-size: 30px;
  font-weight: bold;
  margin-top: 10px;
}

.message {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 40px;
  font-size: 30px;
  font-weight: bold;
  border: 2px solid white;
  border-radius: 20px;
  padding: 20px;
  width: 300px;
  background: linear-gradient(to right, rgb(244, 217, 82), rgb(252, 103, 252));
}

.results {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  font-size: 25px;
  gap: 20px;
}

.weapons {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
  font-size: 30px;
}

#playerChoice,
#computerChoice {
  font-weight: bold;
  margin-left: 5px;
}

.score {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  gap: 20px;
  margin-top: 40px;
}

span {
  font-weight: bold;
  color: rgb(0, 0, 0);
}

@media screen and (max-width: 600px) {
  .choices {
    gap: 20px;
  }

  .choice {
    margin-top: 10px;
  }

  .img {
    height: 80px;
    width: 80px;
    font-size: 30px;
    border: 2px solid black;
  }

  .choiceText {
    font-size: 20px;
  }

  .message {
    font-size: 20px;
    width: 200px;
    padding: 10px;
  }

  .results {
    gap: 10px;
    margin-top: 5px;
  }

  .weapons {
    margin-top: 20px;
    font-size: 15px;
  }

  .score {
    margin-top: 20px;
    font-size: 20px;
  }
}


```

### JavaScript

```JS
let choices = document.body.querySelectorAll(".choice");

let playerChoice = document.body.querySelector("#playerChoice");
let computerChoice = document.body.querySelector("#computerChoice");

let playerScore = parseInt(
  document.body.querySelector(".playerScore").innerHTML
);
let computerScore = parseInt(
  document.body.querySelector(".computerScore").innerHTML
);

let reload = document.body.querySelector(".reload");
reload.addEventListener("click", () => {
  location.reload();
});

if (document.querySelector(".message").innerHTML === "") {
  document.body.querySelector(".message").innerHTML = "Click your choice";
}

let randomChoice = () => {
  let random = Math.floor(Math.random() * 3);
  return choices[random];
};

let checkWinner = (player, computer) => {
  if (player === computer) {
    document.body.querySelector(".message").innerHTML = "Tie";
  } else if (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Paper" && computer === "Rock") ||
    (player === "Scissors" && computer === "Paper")
  ) {
    document.body.querySelector(".message").innerHTML = "You win";
    playerScore++;
    document.body.querySelector(".playerScore").innerHTML = playerScore;
  } else {
    document.body.querySelector(".message").innerHTML = "You lose";
    computerScore++;
    document.body.querySelector(".computerScore").innerHTML = computerScore;
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    choices.forEach((choice) => choice.classList.add("disabled"));

    playerChoice.innerHTML = choice.querySelector(".choiceText").innerHTML;

    let loadingText = ".";

    let loadingInterval = setInterval(() => {
      computerChoice.innerHTML = loadingText;
      loadingText = loadingText.length < 3 ? loadingText + "." : ".";
    }, 500);

    setTimeout(() => {
      clearInterval(loadingInterval);

      computerChoice.innerHTML =
        randomChoice().querySelector(".choiceText").innerHTML;

      checkWinner(playerChoice.innerHTML, computerChoice.innerHTML);

      choices.forEach((choice) => choice.classList.remove("disabled"));
    }, Math.random() * 1000 + 1000);
  });
});

```
