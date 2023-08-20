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
    
    test('a cell can not be selected in the same game ',()=>{
        //setup
        const newGame = new TicTacToe();

        //act
        newGame.fillCell(5);
        newGame.fillCell(5);
        newGame.fillCell(6);
        newGame.fillCell(1);
        let playerX = newGame.getPlayerX();
        let playerO = newGame.getPlayerO();
        expectedResultX = [5,1];
        expectedResultO = [6];

        //compare/assert
        expect(playerX).toStrictEqual( expectedResultX );
        expect(playerO).toStrictEqual( expectedResultO );
    })

    test('when a player selects a winning combination, the player wins and the game is over',()=>{
        //setup
        const newGame = new TicTacToe();

        //act
        newGame.fillCell(5);
        newGame.fillCell(8);
        newGame.fillCell(3);
        newGame.fillCell(1);
        newGame.fillCell(4);
        let playerX = newGame.getPlayerX();
        let playerO = newGame.getPlayerO();
        let turn = newGame.getTurn();
        expectedResultX = [];
        expectedResultO = [];
        expectedResultTurn = true;

        //compare/assert
        expect(playerX).toStrictEqual( expectedResultX );
        expect(playerO).toStrictEqual( expectedResultO );
        expect(turn).toStrictEqual( expectedResultTurn );
    })
    
})