import { useEffect, useState } from "react";
import confetti from "canvas-confetti";
import Name from "./Name";

import "./App.css";
const p = [
  {
    id: 1,
    player: "",
  },
  {
    id: 2,
    player: "",
  },
  {
    id: 3,
    player: "",
  },
  {
    id: 4,
    player: "",
  },
  {
    id: 5,
    player: "",
  },
  {
    id: 6,
    player: "",
  },
  {
    id: 7,
    player: "",
  },
  {
    id: 8,
    player: "",
  },
  {
    id: 9,
    player: "",
  },
];

function App() {
  const [nextTurn, setNextTurn] = useState("X");
  const [player, setPlayer] = useState(false);
  const [user, setUser] = useState(p);
  const [count, setCount] = useState(0);
  const [winner, setWinner] = useState("");
  const [player1, setPlayer1] = useState("");
  const [player2, setPlayer2] = useState("");
  const gamer = { player1, setPlayer1, player2, setPlayer2 };
  useEffect(() => {
    checkWinner();
  });

  function checkWinner() {
    if (
      (user[0].player == user[1].player &&
        user[1].player == user[2].player &&
        user[2].player == "X") ||
      (user[3].player == user[4].player &&
        user[4].player == user[5].player &&
        user[5].player == "X") ||
      (user[6].player == user[7].player &&
        user[7].player == user[8].player &&
        user[8].player == "X") ||
      (user[0].player == user[3].player &&
        user[3].player == user[6].player &&
        user[6].player == "X") ||
      (user[1].player == user[4].player &&
        user[4].player == user[7].player &&
        user[7].player == "X") ||
      (user[2].player == user[5].player &&
        user[5].player == user[8].player &&
        user[8].player == "X") ||
      (user[0].player == user[4].player &&
        user[4].player == user[8].player &&
        user[8].player == "X") ||
      (user[2].player == user[4].player &&
        user[4].player == user[6].player &&
        user[6].player == "X")
    ) {
      setWinner(player1 + " is winner");
      triggerConfetti();
    } else if (
      (user[0].player == user[1].player &&
        user[1].player == user[2].player &&
        user[2].player == "O") ||
      (user[3].player == user[4].player &&
        user[4].player == user[5].player &&
        user[5].player == "O") ||
      (user[6].player == user[7].player &&
        user[7].player == user[8].player &&
        user[8].player == "O") ||
      (user[0].player == user[3].player &&
        user[6].player == user[3].player &&
        user[6].player == "O") ||
      (user[1].player == user[4].player &&
        user[4].player == user[7].player &&
        user[7].player == "O") ||
      (user[2].player == user[5].player &&
        user[5].player == user[8].player &&
        user[8].player == "O") ||
      (user[0].player == user[4].player &&
        user[4].player == user[8].player &&
        user[8].player == "O") ||
      (user[2].player == user[4].player &&
        user[4].player == user[6].player &&
        user[6].player == "O")
    ) {
      setWinner(player2 + " is winner");
      triggerConfetti();
    } else if (count === 9) {
      setWinner("draw");
    }
  }
  function handlePlayer(e) {
    setNextTurn(player ? "X" : "O");
    const arr = user.map((item) => {
      if (item.id !== parseInt(e.target.id)) {
        return item;
      } else {
        return {
          ...item,
          player: nextTurn,
        };
      }
    });
    setPlayer(!player);
    setUser(arr);
    setCount((n) => n + 1);
  }
  function reset() {
    setCount(0);
    setUser(p);
    setWinner("");
    setPlayer(false);
    setNextTurn("X");
  }
  var modal = document.getElementById("modal");
  var modalC = document.getElementById("modalC");
  if (modal)
    winner ? (modal.style.display = "flex") : (modal.style.display = "none");
  if (modalC)
    winner ? (modalC.style.display = "block") : (modalC.style.display = "none");
  var span = document.getElementById("close");
  if (span) {
    span.onclick = function () {
      modal.style.display = "none";
      modalC.style.display = "none";
      reset();
    };
  }

  if (modalC) {
    modalC.onclick = function () {
      modal.style.display = "none";
      modalC.style.display = "none";
      reset();
    };
  }
  var btn = document.getElementById("btn");
  if (btn) {
    btn.onclick = function () {
      modal.style.display = "none";
      modalC.style.display = "none";
      reset();
    };
  }
  function triggerConfetti() {
    confetti({
      particleCount: 200,
      spread: 90,
      origin: { y: 0.6 },
    });
  }

  return (
    <div className="base">
      <Name gamer={gamer} />
      <div className="modalContainer" id="modalC">
        <div className="modal" id="modal">
          <div className="modal-content">
            <h1>
              🥳🥂🍾
              <br />
              {winner ? (winner === "draw" ? "Game is Draw" : winner) : ""}
            </h1>
          </div>
          <span className="close" id="close">
            &times;
          </span>
        </div>
      </div>
      <div className="container">
        <div className="wrapper">
          {user.map((item) => {
            return (
              <button
                className="card"
                key={item.id}
                id={item.id}
                onClick={(e) => handlePlayer(e)}
                disabled={item.player || winner}
              >
                <h1>{item.player}</h1>
              </button>
            );
          })}
        </div>
        <h1>Next Turn :{nextTurn === "X" ? player1 : player2}</h1>

        <button className="btn" onClick={reset} id="btn">
          Reset
        </button>
      </div>
    </div>
  );
}

export default App;
