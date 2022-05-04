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
    // if (this.classList[0] === "circles") {
    //     this.classList.add("cross");
    //     this.classList.remove("circles");
    // }
})