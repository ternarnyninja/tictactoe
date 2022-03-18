import { fieldMoves } from "../Utils/utilites.js";

export default class PlayerMove {
    constructor(player) {
        this.player = player;
    }

    setMove = (event) => {
        fieldMoves[event.target.id] = this.player;
        document.getElementById(event.target.id).innerText = this.player;
    }
}