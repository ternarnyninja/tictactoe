import { cells } from "../Utils/utilites.js";

export default class Events {
    constructor(playerMove) {
        this.playerMove = playerMove.setMove.bind(this)
    }

    handleEvent = () => {

        for(let i = 0;i < cells.length;i++) {
            cells[i].setAttribute("id", i);
            cells[i].addEventListener("click", this.playerMove, false);
        }

    }
}