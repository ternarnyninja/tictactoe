import MyCell from "./components/UI/MyCell.js";
import MyGameBoard from "./components/MyGame/MyGameBoard.js";
import MyEvents from "./components/MyGame/MyEvents.js";
import MyMove from "./components/MyGame/MyMove.js";
import CheckWin from "./components/MyGame/CheckWin.js";

const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];
const myCell = new MyCell(3, 3, "tr", "td");
// const myBoard = new MyBoard(Array.from(Array(9).keys()));
const myBoard = Array.from(Array(9).keys());
const checkWin = new CheckWin(myBoard, winCombos);
const myMove = new MyMove("X", myBoard, checkWin);
const myEvents = new MyEvents(myMove);
const myGameBoard = new MyGameBoard(myCell, myEvents);
// myGameBoard.startGame();
