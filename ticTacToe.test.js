const TicTacToe = require('./ticTacToe');

describe('tic tac toe game testing', ()=>{
    test('when a button is clicked, that cell is assigned to player',()=>{
        //setup
        const newGame = new TicTacToe();
        const cell = 2;

        //act
        newGame.fillCell(cell);
        let player = newGame.getPlayerX();
        const expectedResult = [2];

        //compare/assert
        expect(player).toStrictEqual(expectedResult);
    })
})