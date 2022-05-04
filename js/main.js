const getElement = (id) => {
    return document.getElementById(id)
}
const clickTurn = getElement("currentTurn").addEventListener("click", function () {
    if (this.classList[0] == "cross") {
        this.classList.remove("cross");
        this.classList.add("circle");
    }
    else {
        this.classList.add("cross");
        this.classList.remove("circle");
    }

})
const listTable = document.querySelectorAll('#cellList li');
for (let i = 0; i < listTable.length; i++) {
    listTable[i].addEventListener("click", function () {
        if (this.classList == "") {

        }
    })

}