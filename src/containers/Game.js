import React, { Component } from 'react';
import Board from '../components/Board';
import Buttons from '../components/Buttons';

class Game extends Component {

    constructor(props){
        super(props);
        this.state = {
            boardCells: [[],[],[],[],[],[],[]],
            turn: null
        };
        this.handleButtonSelect = this.handleButtonSelect.bind(this);
    }

    componentDidMount(){
        console.log("Component DID MOUNT");
        this.setState({turn: 1});
    }

    handleButtonSelect(column){
        console.log("Button has Been selected, ", column)
        const currentBoard = this.state.boardCells;
        if (this.state.turn === 1) {
            currentBoard[column].push("red")
            console.log(currentBoard)
            this.setState({turn: 2})
        } else {
            currentBoard[column].push("yellow")
            console.log(currentBoard)
            this.setState({turn: 1})
        }
        this.setState({boardCells: currentBoard})
    }

    render(){

        const board = []
        for(let i=0; i < this.state.boardCells.length; i++) {
        board.push(this.state.boardCells[i].slice())
        }
            

        return(
            <div>
            <Buttons onButtonSelect={this.handleButtonSelect}/>
            <Board boardCells={board} />
            </div>
        )
    }

}

export default Game;