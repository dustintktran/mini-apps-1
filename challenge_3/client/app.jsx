
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleCheckout = this.handleCheckout.bind(this);
    this.handleForm1 = this.handleForm1.bind(this);
    this.handleForm2 = this.handleForm2.bind(this);
    this.handleForm3 = this.handleForm3.bind(this);
  }

  handleCheckout() {
    let checkoutButton = document.getElementById("app");
    ReactDOM.unmountComponentAtNode(checkoutButton);
    ReactDOM.render(<Form1 form1={this.handleForm1}/>, document.getElementById("app"));
  }

  handleForm1() {
    let form1 = document.getElementById("app");
    ReactDOM.unmountComponentAtNode(form1);
    ReactDOM.render(<Form2 form2={this.handleForm2}/>, document.getElementById("app"))
  }

  handleForm2() {
    let form2 = document.getElementById("app");
    ReactDOM.unmountComponentAtNode(form2);
    ReactDOM.render(<Form3 form3={this.handleForm3}/>, document.getElementById("app"))
  }

  handleForm3() {
    let form3 = document.getElementById("app");
    ReactDOM.unmountComponentAtNode(form3);
    ReactDOM.render(<Summary />, document.getElementById("app"))
  }

  render() {
    return <div id="checkoutButton">Thanks for shopping! <Checkout checkout={this.handleCheckout} /></div>
  }
}

//===============================END OF APP===========================================//
const Checkout = (props) => {
  return <button onClick={props.checkout}>Checkout</button>
}

const Form1 = (props) => {
  return (
    <div>
      <div>Please fill out the following information</div>
      <form>
        <span id="name">Name: </span><input></input><br/>
        <span id="email">Email Address: </span><input></input><br/>
        <span id="password">Password: </span><input></input><br/>
        <button onClick={props.form1}>Next</button>
      </form>
    </div>
  )
}

const Form2 = (props) => {
  return (
    <div>
      <div>Please fill out the following information</div><br/>
      <div>Shipping Address: </div><br/>
      <form>
        <span>Address Line 1: </span><input></input><br/>
        <span>Address Line 2: </span><input></input><br/>
        <span>City: </span><input></input><span>State: </span><input></input><br/>
        <span>Zip Code: </span><input></input><br/>
        <span>Phone Number: </span><input></input><br/>
        <button onClick={props.form2}>Next</button>
      </form>
    </div>
  )
}

const Form3 = (props) => {
  return (
    <div>
      <div>Please fill out the following information</div>
      <form>
        <span>Credit Card Number: </span><input></input><br/>
        <span>Expiry Date: </span><input></input><br/>
        <span>CVV: </span><input></input><br/>
        <span>Billing Zip: </span><input></input><br/>
        <button onClick={props.form3}>Next</button>
      </form>
    </div>
  )
}

const Summary = (props) => {
  return (
    <div>
      <div>Summary:</div>
      <div>Name: </div>
      <div>Email: </div>
      <div>Password: </div>
      <div>Address: </div>
      <div>Credit Card: </div>
      <button>Purchase</button>
    </div>
  )
}
ReactDOM.render(<App />, document.getElementById("app"));