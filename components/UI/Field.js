import { table } from "../Utils/utilites.js";
import { board } from "../Utils/utilites.js";

export default class Field {
    constructor(rows, cols, tr, td) {
        this.rows = rows;
        this.cols = cols; 
        this.tr = tr;
        this.td = td;
    }

    renderField = () => {

        for(let i = 0;i < this.rows;i++) {
            const tableRow = document.createElement(this.tr);
            table.appendChild(tableRow);

            for(let j = 0;j < this.cols;j++) {
                const tableColumn = document.createElement(this.td);
                tableColumn.classList.add("cell");
                tableRow.appendChild(tableColumn);
            }
        }
        board.appendChild(table);
    }

}
