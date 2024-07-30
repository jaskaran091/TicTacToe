import "./App.css";

function Name({ gamer }) {
  function hide() {
    const bg = document.getElementById("names");
    bg.style.display = "none";
  }
  return (
    <div className="players" id="names">
      <h1>Enter Player Info</h1>
      <label htmlFor="p1">Enter Name for player 1</label>
      <input
        type="text"
        name="player1"
        id="p1"
        value={gamer.player1}
        onChange={(e) => gamer.setPlayer1(e.target.value)}
      />
      <label htmlFor="p2">Enter Name for player 2</label>
      <input
        type="text"
        name="player1"
        id="p2"
        value={gamer.player2}
        onChange={(e) => gamer.setPlayer2(e.target.value)}
      />
      <button onClick={hide} id="btn">
        Submit
      </button>
    </div>
  );
}

export default Name;
