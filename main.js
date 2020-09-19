// track the current player
let currentPlayer = 'x';

let togglePlayer = () => {
    if(currentPlayer === 'x'){
        currentPlayer = 'o';
    } else {
        currentPlayer = 'x';
    } 
}

// add event listeners to tic tac toe board for when users click squares
let ticTacToeCells = document.getElementsByClassName('cell');

let processClick = (e) => {
    e.target.innerHTML = currentPlayer; 
    togglePlayer()
    e.target.removeEventListener('click', processClick);
    checkForWinner()
};

for (let i = 0; i < ticTacToeCells.length; i++){
    ticTacToeCells[i].addEventListener('click', processClick)
}

let tracks = [
    ['a1', 'b1', 'c1'],
    ['a2', 'b2', 'c2'],
    ['a3', 'b3', 'c3'],
    ['a1', 'a2', 'a3'],
    ['b1', 'b2', 'b3'],
    ['c1', 'c2', 'c3'],
    ['a1', 'b2', 'c3'],
    ['a3', 'b2', 'c1'],
];

let id = 'winner';

let announceWinner = (winner) => {
    document.getElementById(id).innerHTML = `The winner is ${winner}`;
    for (let i = 0; i < ticTacToeCells.length; i++){
        ticTacToeCells[i].removeEventListener('click', processClick)
    }
}

let announceDraw = () => {
    document.getElementById('winner').innerHTML = "It's a draw!"
}

let turnCounter = 0

// make it possible for users to take turns by being X or O
let checkForWinner = () => {
    tracks.forEach(track => {
        let trackValue = 
        document.getElementById(track[0]).innerHTML+
        document.getElementById(track[1]).innerHTML+
        document.getElementById(track[2]).innerHTML

        if (trackValue === 'xxx') {
            announceWinner('x')
            throw 'draw'
        } else if (trackValue === 'ooo') {
            announceWinner('o')
            throw 'draw'
        } else if (turnCounter === 8) {
            announceDraw()
        }
    })
    turnCounter++
}  

// make it possible to recognize a 3 in a row pattern to declare a winner
// have option to clear board 
// recognize when there is a draw and no one wins and have it declare a draw 