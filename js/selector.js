export function getCellElementList() {
    return document.querySelectorAll("#cellList > li")
}
export function getCurrentTurnElement() {
    return document.getElementById("currentTurn")
}
export function getCurrentListTable(index) {
    return document.querySelector(`#cellList > li:nth-child(${index + 1})`)

}
export function getGameStatusElement() {
    return document.getElementById("gameStatus")

}
