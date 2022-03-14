import { headerButtons } from "../Utils/utilites.js";
// ??? 
export default class Button {

    constructor(button, textElem, gameSeriesElem, classNameText, classNameSeries, playerText, seriesText) {
        this.button = document.createElement(button);
        this.textElem = document.createElement(textElem);
        this.gameSeriesElem = document.createElement(gameSeriesElem);
        this.classNameText = classNameText;
        this.classNameSeries = classNameSeries;
        this.playerText = playerText;
        this.seriesText = seriesText;
    }

    renderButton = () => {
        this.textElem.classList.add(this.classNameText);
        this.textElem.innerText = this.playerText;
        this.gameSeriesElem.classList.add(this.classNameSeries);
        this.gameSeriesElem.innerText = this.seriesText;
        this.button.append(this.textElem);
        this.button.append(this.gameSeriesElem);
        headerButtons.append(this.button);
    }
}