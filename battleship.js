let board = [
[null, null, null, "S", null],
[null, "S", null, "S", null],
["S", null, null, null, null],
[null, "S", null, null, null],
[null, null, null, null, "S"],
];



for(i = 0; i < 100; i++){
    let randRow = Math.floor(Math.random() * board.length);

    let randCol = Math.floor(Math.random() * board[randRow].length);

    let strike = board[randRow][randCol];

    if(strike === "S"){
        board[randRow][randCol] = null;
    }

    checkIfWin();


}

function checkIfWin(){

    for (let c = 0; c < board.length; c++){

        for(let r = 0; r < board[r].length; c++){
            if(board[r][c] === "S"){
                console.log("Next round");
                return
            }
        }
        winScreen();
    }


    
}

function winScreen(){
    console.log("Good Job")


}