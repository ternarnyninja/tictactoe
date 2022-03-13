import MyGameBoard from "./MyGameBoard.js";

// Maybe some other way?
export default class MyEvents {
    constructor(move) {
        this.move = move.setMove.bind(this); // only this way???
    }

    handleEvent = () => {

        for(let i = 0;i < MyGameBoard.cells.length;i++) {
            MyGameBoard.cells[i].setAttribute("id", i);
            MyGameBoard.cells[i].addEventListener("click", this.move, false);
        }

    }
}