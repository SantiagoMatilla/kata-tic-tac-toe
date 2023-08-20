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

        //compare/assert
        expect(firstTurn).toBe(!secondTurn);
    })
    test('when cell 2 and 3 are selected they are assigned to playerX and playerO respectivelt',()=>{
        //setup
        const newGame = new TicTacToe();

        //act
        newGame.fillCell(2);
        newGame.fillCell(3);
        let playerX = newGame.getPlayerX();
        let playerO = newGame.getPlayerO();
        expectedResultX = [2];
        expectedResultO = [3];


        //compare/assert
        expect(playerX).toStrictEqual( expectedResultX );
        expect(playerO).toStrictEqual( expectedResultO );
    })
    
})