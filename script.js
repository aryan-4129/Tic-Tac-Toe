let boxes = document.querySelectorAll(".box");

let resetBtn = document.querySelector("#reset-btn");

let newBtn = document.querySelector(".new-btn");

let div = document.querySelector(".msg-container");

let winnerMsg = document.querySelector(".msg");
let turnO = true;//start will be by O

let countBox = 0;
const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
const reset_btn = () => {
    turnO = true;
    enableBoxes();
    div.classList.add("hide");

}



newBtn.addEventListener("click", reset_btn);
resetBtn.addEventListener("click", reset_btn);

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnO) {//trun O
            box.innerText = "O";
            turnO = false;
        }
        else {//turn X
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;

        countBox++;
        console.log(countBox);
        if (countBox === 9) {
            gameDraw();
        }
        checkWinner();

    })
})



const gameDraw = () => {
    div.classList.remove("hide");
    winnerMsg.innerText = "DRAW";
    countBox = 0;
}
const congrats = (winner) => {
    div.classList.remove("hide");
    winnerMsg.innerText = `Congratulations Winner is ${winner}`;
    disableBoxes();


};
const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
};

const checkWinner = () => {
    for (let pattern of winPattern) {
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
            if (pos1Val === pos2Val && pos2Val === pos3Val) {
                console.log("WINNER", pos1Val);

                congrats(pos1Val);
            }
        }
    }
};

