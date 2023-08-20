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
    test('when a player plays, turn switches',()=>{
        //setup
        const newGame = new TicTacToe();
        const cell = 7;

        //act
        let firstTurn = newGame.getTurn();
        newGame.fillCell(cell);
        let secondTurn = newGame.getTurn();
        const expectedResult = [2];

        //compare/assert
        expect(firstTurn).toBe(!secondTurn);
    })
    
})