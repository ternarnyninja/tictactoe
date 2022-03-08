export default class MyGameBoard {
    constructor(myCell, myEvents) {
        this.myCell = myCell;
        this.myEvents = myEvents;
    }

    static board = document.querySelector(".board");
    static cells = document.getElementsByClassName("cell");
    static table = document.createElement("table");
    static headerButtons = document.querySelector(".header__buttons");

    startGame = () => {
        this.myCell.renderMyCell();
        this.myEvents.handleEvent();
    }
}