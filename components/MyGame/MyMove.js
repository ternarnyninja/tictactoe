// I think there is another way

export default class MyMove {
    constructor(player, myBoard, check) {
        this.player = player;
        this.myBoard = myBoard;
        this.check = check.checkWin.bind(this);
    }

    setMove = (event) => {
        this.myBoard[event.target.id] = this.player;
        let targetId = document.getElementById(event.target.id);
        targetId.innerText = this.player;
        this.check();
    }

    // turn = (squaredId) => {
    //     this.myBoard[squaredId] = this.player;
    //     console.log(this.myBoard[squaredId]);
    //     let id = document.getElementById(squaredId);
    //     id.innerText = this.player;
    //     // this.checkWin();
    // }

    // checkWin = (player) => {
    //     let winCombinations = this.myBoard.reduce((acc, cur, index) => (cur === player) ? acc.concat(index) : acc, []);

    //     let gameWon;
    //     for(let [index, win] of this.winCombos.entries()) {
    //         if(win.every(elem => plays.indexOf(elem) > - 1)) {
    //             gameWon = {index: index, player: player};
    //             break;
    //         }
    //     }

    // }

    // checkWin = () => {
    // }
    // }
}