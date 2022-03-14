export default class GameBoard {
    constructor(field, buttons, events) {
        this.field = field;
        this.buttons = [...buttons];
        this.events = events;
    }

    startGame = () => {
        this.field.renderField();
        this.btnUi();
        this.events.handleEvent();
    }

    btnUi = () => {
        for(let i = 0;i < this.buttons.length;i ++) {
            this.buttons[i].renderButton();
        }
    }
}