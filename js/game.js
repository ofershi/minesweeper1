var MINE = '💣';


function initGame() {
    gBoard = buildBoard();
    console.table(gBoard)
    renderBoard(gBoard)
}



function buildBoard() {
    var SIZE = 4;
    var board = [];
    for (var i = 0; i < SIZE; i++) {
        board[i] = [];
        for (var j = 0; j < SIZE; j++) {
            board[i][j] = {
                minesAroundCount: 0,
                isShown:false,
                isMine: false,
                isMarked: false
            }
        }
    }
    return board;
}


function renderBoard(board) {
    var strHTML = ``;
    for (var i = 0; i < board.length; i++) {
        strHTML += '<tr>';
        for (var j = 0; j < board[0].length; j++) {
            var cell = board[i][j];
            var className = 'cell' + i + '-' + j;
            strHTML += '<td class="cell ' + className + '"> ' + cell.minesAroundCount + ' </td>'
        }
        strHTML += '</tr>'
    }
    // strHTML += '</tbody>';
    var elContainer = document.querySelector('.board');
    elContainer.innerHTML = strHTML;
}



// var MINE = '💣';
 
// // var gLevel=[
// //     { size: 4,
// //       mines: 2}
// // ]

// function initGame() {
//     gBoard = buildBoard();
//     console.table(gBoard)
//     renderBoard(gBoard)
// }



// function buildBoard() {
//     var size = 4;
//     var board = [];
//     for (var i = 0; i < SIZE; i++) {
//         board[i] = [];
//         for (var j = 0; j < SIZE; j++) {
//             board[i][j] = {
//                 minesAroundCount: 0,
//                 isShown: false,
//                 isMine: false,
//                 isMarked: false
//             }
//         }
//     }
//     // createMine(board)
//     // createMine(board)
//     return board;
// }


// function renderBoard(board) {
//     var strHTML = ``;
//     for (var i = 0; i < board.length; i++) {
//         strHTML += '<tr>';
//         for (var j = 0; j < board[0].length; j++) {
//             var cell = board[i][j];
//             var className = 'cell' + i + '-' + j;
//             strHTML += '<td class="cell ' + className + '"> ' + cell.minesAroundCount + ' </td>'
//         }
//         strHTML += '</tr>'
//     }
//     var elContainer = document.querySelector('.board');
//     elContainer.innerHTML = strHTML;
// }


// // function createMine(board) {
// //     var gMines = [];
// //     for (var i = 0; i < 2; i++) {
// //         var firstIdx = getRandomInteger(0, 4);
// //         var secondIdx = getRandomInteger(0, 4);

// //         board[firstIdx][secondIdx].isMine = true;
// //         gMines.push([firstIdx, secondIdx]);
// //     }
// // }

// function getRandomInteger(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min)) + min;
// }