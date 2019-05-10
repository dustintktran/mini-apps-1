import React from 'react';

class Square extends React.Component {
  constructor(props) { //PROPS ARE: row: row, columns: col, Array of Clicks: clicks
    super(props);
    this.state = {
      color: false, //true == red; false == yellow
      row: this.props.row,
      col: this.props.col
    }
  }
  render() {
    if(this.props.last[0] === this.props.row && this.props.last[1] === this.props.col) {
      console.log(this.props.row, this.props.col, 'clicked')
      if(this.props.turn % 2 === 0) {
        this.state.color = false;
      } else {
        this.state.color = true;
      }
    }
    return <span className="square">
    {this.props.clicks[this.state.col - 1] < this.state.row && <span>-O-</span>}
    {this.props.clicks[this.state.col - 1] >= this.state.row  && this.state.color && <span>-Y-</span>}
    {this.props.clicks[this.state.col - 1] >= this.state.row && !this.state.color && <span>-X-</span>}
     </span>
  }
}

export default Square;


/*
  if clicks
*/