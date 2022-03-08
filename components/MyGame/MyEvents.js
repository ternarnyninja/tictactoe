import MyGameBoard from "./MyGameBoard.js";
import MyMove from "./MyMove.js";

// Maybe some other way?
export default class MyEvents {
    constructor() {
    }

    handleEvent = () => {

        for(let i = 0;i < MyGameBoard.cells.length;i++) {
            MyGameBoard.cells[i].addEventListener("click", () => {
                console.log(this.setMove); // undefined Я хз почему где-то потерялось this поскольку работало
            });


        }

    }
}