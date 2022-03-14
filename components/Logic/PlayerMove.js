export default class PlayerMove {
    constructor(player) {
        this.player = player;
    }

    setMove = (event) => {
        console.log(event.target.id);
    }
}