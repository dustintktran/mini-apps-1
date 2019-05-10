import React from 'react';
import ReactDOM from 'react-dom';
import Square from './Square.jsx';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickArray: [0,0,0,0,0,0,0],
      turn: 0,
      lastClicked: [-1,-1]
    }
    //binding
    this.handleClick = this.handleClick.bind(this);
    this.getColor = this.getColor.bind(this);

  }

  //make a turns state
  //if turns is odd and the colclicked is equal to your row and column, set the color to the right color

  handleClick(col) {
    let cols = this.state.clickArray.slice();
    let turn = this.state.turn + 1;
    let lastClicked = [cols[col-1]+1, col]
    cols[col-1]++;
    this.setState({clickArray:cols, turn:turn, lastClicked:lastClicked})
  }

  getColor() {
    return this.state.color;
  }

  render() {
    return (
      <div>
        <div>
          <button onClick={() => this.handleClick(1)}>1 </button>
          <button onClick={() => this.handleClick(2)}>2 </button>
          <button onClick={() => this.handleClick(3)}>3 </button>
          <button onClick={() => this.handleClick(4)}>4 </button>
          <button onClick={() => this.handleClick(5)}>5 </button>
          <button onClick={() => this.handleClick(6)}>6 </button>
          <button onClick={() => this.handleClick(7)}>7 </button>
        </div>
        <div className="row1">
          <Square row={6} last={this.state.lastClicked} col={1} turn={this.state.turn} clicks={this.state.clickArray}/>
          <Square row={6} last={this.state.lastClicked} col={2} turn={this.state.turn} clicks={this.state.clickArray}/>
          <Square row={6} last={this.state.lastClicked} col={3} turn={this.state.turn} clicks={this.state.clickArray}/>
          <Square row={6} last={this.state.lastClicked} col={4} turn={this.state.turn} clicks={this.state.clickArray}/>
          <Square row={6} last={this.state.lastClicked} col={5} turn={this.state.turn} clicks={this.state.clickArray}/>
          <Square row={6} last={this.state.lastClicked} col={6} turn={this.state.turn} clicks={this.state.clickArray}/>
          <Square row={6} last={this.state.lastClicked} col={7} turn={this.state.turn} clicks={this.state.clickArray}/>
        </div>
        <div className="row2">
          <Square row={5} last={this.state.lastClicked} col={1} turn={this.state.turn} clicks={this.state.clickArray}/>
          <Square row={5} last={this.state.lastClicked} col={2} turn={this.state.turn} clicks={this.state.clickArray}/>
          <Square row={5} last={this.state.lastClicked} col={3} turn={this.state.turn} clicks={this.state.clickArray}/>
          <Square row={5} last={this.state.lastClicked} col={4} turn={this.state.turn} clicks={this.state.clickArray}/>
          <Square row={5} last={this.state.lastClicked} col={5} turn={this.state.turn} clicks={this.state.clickArray}/>
          <Square row={5} last={this.state.lastClicked} col={6} turn={this.state.turn} clicks={this.state.clickArray}/>
          <Square row={5} last={this.state.lastClicked} col={7} turn={this.state.turn} clicks={this.state.clickArray}/>
        </div>
        <div className="row3">
          <Square row={4} last={this.state.lastClicked} col={1} turn={this.state.turn} clicks={this.state.clickArray}/>
          <Square row={4} last={this.state.lastClicked} col={2} turn={this.state.turn} clicks={this.state.clickArray}/>
          <Square row={4} last={this.state.lastClicked} col={3} turn={this.state.turn} clicks={this.state.clickArray}/>
          <Square row={4} last={this.state.lastClicked} col={4} turn={this.state.turn} clicks={this.state.clickArray}/>
          <Square row={4} last={this.state.lastClicked} col={5} turn={this.state.turn} clicks={this.state.clickArray}/>
          <Square row={4} last={this.state.lastClicked} col={6} turn={this.state.turn} clicks={this.state.clickArray}/>
          <Square row={4} last={this.state.lastClicked} col={7} turn={this.state.turn} clicks={this.state.clickArray}/>
        </div>
        <div className="row4">
          <Square row={3} last={this.state.lastClicked} col={1} turn={this.state.turn} clicks={this.state.clickArray}/>
          <Square row={3} last={this.state.lastClicked} col={2} turn={this.state.turn} clicks={this.state.clickArray}/>
          <Square row={3} last={this.state.lastClicked} col={3} turn={this.state.turn} clicks={this.state.clickArray}/>
          <Square row={3} last={this.state.lastClicked} col={4} turn={this.state.turn} clicks={this.state.clickArray}/>
          <Square row={3} last={this.state.lastClicked} col={5} turn={this.state.turn} clicks={this.state.clickArray}/>
          <Square row={3} last={this.state.lastClicked} col={6} turn={this.state.turn} clicks={this.state.clickArray}/>
          <Square row={3} last={this.state.lastClicked} col={7} turn={this.state.turn} clicks={this.state.clickArray}/>
        </div>
        <div className="row5">
          <Square row={2} last={this.state.lastClicked} col={1} turn={this.state.turn} clicks={this.state.clickArray}/>
          <Square row={2} last={this.state.lastClicked} col={2} turn={this.state.turn} clicks={this.state.clickArray}/>
          <Square row={2} last={this.state.lastClicked} col={3} turn={this.state.turn} clicks={this.state.clickArray}/>
          <Square row={2} last={this.state.lastClicked} col={4} turn={this.state.turn} clicks={this.state.clickArray}/>
          <Square row={2} last={this.state.lastClicked} col={5} turn={this.state.turn} clicks={this.state.clickArray}/>
          <Square row={2} last={this.state.lastClicked} col={6} turn={this.state.turn} clicks={this.state.clickArray}/>
          <Square row={2} last={this.state.lastClicked} col={7} turn={this.state.turn} clicks={this.state.clickArray}/>
        </div>
        <div className="row6">
          <Square row={1} last={this.state.lastClicked} col={1} turn={this.state.turn} clicks={this.state.clickArray}/>
          <Square row={1} last={this.state.lastClicked} col={2} turn={this.state.turn} clicks={this.state.clickArray}/>
          <Square row={1} last={this.state.lastClicked} col={3} turn={this.state.turn} clicks={this.state.clickArray}/>
          <Square row={1} last={this.state.lastClicked} col={4} turn={this.state.turn} clicks={this.state.clickArray}/>
          <Square row={1} last={this.state.lastClicked} col={5} turn={this.state.turn} clicks={this.state.clickArray}/>
          <Square row={1} last={this.state.lastClicked} col={6} turn={this.state.turn} clicks={this.state.clickArray}/>
          <Square row={1} last={this.state.lastClicked} col={7} turn={this.state.turn} clicks={this.state.clickArray}/>
        </div>
        {this.state.clickArray}  {this.state.turn}  {this.state.lastClicked}
      </div>
    )
  }
}
export default App;