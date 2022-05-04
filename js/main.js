const getElement = (id) => {
    return document.getElementById(id)
}

const renderTable = function () {
    const listTable = document.querySelectorAll('#cellList li');

    for (let i = 0; i < listTable.length; i++) {
        listTable[i].addEventListener("click", function () {
            if (listTable[i].textContent == "") {
                const changeTurn = getElement("currentTurn")
                if (changeTurn.classList[0] == "cross") {
                    changeTurn.classList.remove("cross");
                    changeTurn.classList.add("circle");
                    const content = "x";
                    listTable[i].innerHTML = content;

                }
                else if (changeTurn.classList[0] == "circle") {
                    changeTurn.classList.add("cross");
                    changeTurn.classList.remove("circle");
                    const content = "o";
                    listTable[i].innerHTML = content;
                }
            }
            else {
                return
            }


        })

    }
}
renderTable()