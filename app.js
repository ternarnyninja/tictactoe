import Field from "./components/UI/Field.js";
import Button from "./components/UI/Button.js";
import GameBoard from "./components/UI/GameBoard.js";
import Events from "./components/Logic/Events.js";
import PlayerMove from "./components/Logic/PlayerMove.js";
import { startBtn } from "./components/utils/utils.js";
import { elem } from "./components/utils/utils.js";
import { headerTitle } from "./components/utils/utils.js";

const field = new Field(3, 3, "tr", "td");
const buttons = [
    new Button("button", "div", "div","player__x", "game__series", "X", "_"),
    new Button("button", "div", "div","player__o", "game__series", "O", "_"),
]
const playerMove = new PlayerMove();
const events = new Events(playerMove);
const gameBoard = new GameBoard(field, buttons, events);

startBtn.addEventListener("click", renderBoard, false);

let start = 0;
function renderBoard() {
    if(start === 0) {
        start = 1;
    }
    startBtn.removeEventListener("click", renderBoard, false);
    elem.style.display = "block";
    let width = 1;
    let id = setInterval(frame, 42);

    function frame() {
        if(width >= 100){
            clearInterval(id);
            start = 0;
            elem.style.display = "none";
            startBtn.style.display = "none";
            headerTitle.style.display = "none";
            setTimeout(gameBoard.startGame, 1000);
        } else {
            width++;
            elem.style.width = width + "%";
        }
    }
}