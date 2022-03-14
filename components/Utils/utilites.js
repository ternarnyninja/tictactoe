const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

export const headerButtons = document.querySelector(".header__buttons");
export const table = document.createElement("table");
export const board = document.querySelector(".game__board");
export const cells = document.getElementsByClassName("cell");
export const headerTitle = document.querySelector(".header__title");
export const startBtn = document.querySelector(".game__start");
export let elem = document.getElementById("load__bar");





