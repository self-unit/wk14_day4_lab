import React, { Component } from 'react';
import Board from '../components/Board';
// import Buttons from '../components/Buttons';

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
        const currentBoard = this.state.boardCells;
        if (this.state.turn === 1) {
            currentBoard[column].push("red")
            this.setState({turn: 2})
        } else {
            currentBoard[column].push("yellow")
            this.setState({turn: 1})
        }
        this.setState({boardCells: currentBoard})
    }

    render(){
        return(
            <div>
            {/* <Buttons onButtonSelect={this.handleButtonSelect}/> */}
            <Board boardCells={this.state.boardCells} />
            </div>
        )
    }

}

export default Game;