import MyCell from "./components/UI/MyCell.js";
import MyGameBoard from "./components/MyGame/MyGameBoard.js";
import MyEvents from "./components/MyGame/MyEvents.js";
import MyMove from "./components/MyGame/MyMove.js";

const myCell = new MyCell(3, 3, "tr", "td");
const myEvents = new MyEvents();
const setMove = new MyMove();
const myGameBoard = new MyGameBoard(myCell, myEvents, setMove);
// myGameBoard.startGame();