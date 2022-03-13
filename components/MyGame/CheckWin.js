export default class CheckWin {
    constructor(board, winCombos) {
        this.board = board;
        this.winCombos = winCombos;
    }

    checkWin = () => {
        let winningCombination = this.board.reduce((acc, cur, index) => (cur === "X") ? acc.concat(index) : acc, []);

        console.log(winningCombination);
    }
}