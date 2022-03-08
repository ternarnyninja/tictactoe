import MyCell from "./components/UI/MyCell.js";
import MyGameBoard from "./components/MyGame/MyGameBoard.js";
import MyEvents from "./components/MyGame/MyEvents.js";
import MyMove from "./components/MyGame/MyMove.js";

const myCell = new MyCell(3, 3, "tr", "td");
const myMove = new MyMove();
const myEvents = new MyEvents(myMove);
const myGameBoard = new MyGameBoard(myCell, myEvents);
myGameBoard.startGame();
