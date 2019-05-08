// import React from 'react';
// import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <div>THIS IS IN THE APP CLASS</div>
  }
}

ReactDOM.render(<App />, document.getElementById("app"), console.log('INSIDE REACT RENDERING'));