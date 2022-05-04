const getElement = (id) => {
    return document.getElementById(id)
}
const clickTurn = getElement("currentTurn").addEventListener("click", (() => {
    console.log('ds');
}))