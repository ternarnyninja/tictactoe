import MyGameBoard from "../MyGame/MyGameBoard.js";

// I think... it can be improved
export default class MyCell {
    constructor(rows, cols, tr, td) {
        this.rows = rows;
        this.cols = cols; 
        this.tr = tr;
        this.td = td;
    }

    renderMyCell = () => {

        for(let i = 0;i < this.rows;i++) {
            const tableRow = document.createElement(this.tr);
            MyGameBoard.table.appendChild(tableRow);

            for(let j = 0;j < this.cols;j++) {
                const tableColumn = document.createElement(this.td);
                tableColumn.classList.add("cell");
                tableColumn.setAttribute("id", j);
                tableRow.appendChild(tableColumn);
            }
        }
        MyGameBoard.board.appendChild(MyGameBoard.table);
    }

}
