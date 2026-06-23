const board = document.getElementById('board');
const status = document.getElementById('status');
const reset = document.getElementById('resetBtn');

let winnerFound = false;



// TODO ->  Winner Check Logic
const box = ["", "", "", "", "", "", "", "", ""];
function checkWinner() {
    const needAns = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

    for (let i = 0; i < needAns.length; i++) {
        let a = box[needAns[i][0]];
        let b = box[needAns[i][1]];
        let c = box[needAns[i][2]];
        if (a != "" && b != "" && c != "" && a == b && b == c) return true;
    }
    return false;
}

// TODO -> check Draw
let totFil = 0;
function checkDraw() {
    return totFil == box.length;
}

let player = 'X';
board.addEventListener('click', (e) => {
    if (winnerFound) return;
    // console.log(e.target);
    // console.log(e.target.value ="= "");
    if (e.target.value != "") {
        alert("Click On Empty Box Only");
        return;
    }
    if (e.target.value == "") {
        e.target.textContent = player;
        box[e.target.id] = player;
        totFil++;
        e.target.value = player;
        if (checkWinner()) {
            status.textContent = `🎉 Player ${player} Wins!`;
            status.classList.add("winner");
            winnerFound = true;
            return;
        }
        if (checkDraw()) {
            status.textContent = `Game Is Draw`;
            status.classList.add("winner");
            winnerFound = true;
            return;
        }
    }
    if (player == 'X') player = 'O';
    else player = 'X';
    status.textContent = `Player ${player}'s Turn`;
})

// Reset Button
reset.addEventListener("click", () => {
    status.textContent = "Player X's Turn";
    status.classList.remove("winner");
    winnerFound = false;

    // empty box and board
    box.fill("");
    totFil = 0;
    document.querySelectorAll(".cell").forEach(cell => {
        cell.textContent = "";
        cell.value = "";
    });
});