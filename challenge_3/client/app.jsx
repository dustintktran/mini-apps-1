
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleCheckout = this.handleCheckout.bind(this);
    this.handleForm1 = this.handleForm1.bind(this);
    this.handleForm2 = this.handleForm2.bind(this);
    this.handleForm3 = this.handleForm3.bind(this);
  }

  //Press Checkout Button: Render Form 1
  handleCheckout() {
    let checkoutButton = document.getElementById("app");
    ReactDOM.unmountComponentAtNode(checkoutButton);
    ReactDOM.render(<Form1 form1={this.handleForm1} />, document.getElementById("app"));
  }

  //Send Form1 Data to database, Render Form 2 with the name of user
  handleForm1(name, email, password) {
    let form1 = document.getElementById("app");
    ReactDOM.unmountComponentAtNode(form1);
    axios.post('http://localhost:3000/api/f1', {
      name: name,
      email: email,
      password: password
    })
      .then()
      .catch(() => console.log('Sum Ting Wong Form1'));
    ReactDOM.render(<Form2 form2={this.handleForm2} name={name} />, document.getElementById("app"))
  }

  //Send Form2 Data to database, Render Form 3 with the name of user
  handleForm2(name, aline1, aline2, city, state, zip, phone) {
    let form2 = document.getElementById("app");
    ReactDOM.unmountComponentAtNode(form2);
    let address = aline1 + '\n' + aline2 + '\n' + city + ', ' + state + ' ' + zip;
    axios.post('http://localhost:3000/api/f2', {
      name: name,
      address: address,
      phone: phone
    })
      .catch(err => console.log('frick'))
    ReactDOM.render(<Form3 form3={this.handleForm3} name={name} />, document.getElementById("app"))
  }

  //Send Form3 Data to database, gather all data and render the summary page
  handleForm3(name, card, exp, cvv, zip) {
    let form3 = document.getElementById("app");
    ReactDOM.unmountComponentAtNode(form3);
    let payment = card + '\n Expiration Date: ' + exp + ' CVV: ' + cvv + ' ZIP: ' + zip;
    axios.post('http://localhost:3000/api/f3', {
      name: name,
      payment: payment
    })
      .then(
        axios.get('http://localhost:3000/api', {
          params: {
            name: name
          }
        })
          .then(results => {
            console.log('This is the data: ', results.data);
            ReactDOM.render(<Summary data={results.data} />, document.getElementById("app"))
          })
          .catch() //get all info then send to summary
      )
      .catch(() => console.log('frick'))
  }

  render() {
    return <div id="checkoutButton">Thanks for shopping! <Checkout checkout={this.handleCheckout} /></div>
  }
}

//===============================END OF APP===========================================//

//Checkout Button
const Checkout = (props) => {
  return <button onClick={props.checkout}>Checkout</button>
}

//First Form: Name, Email, Password
const Form1 = (props) => {
  return (
    <div>
      <div>Please fill out the following information</div>
      <form>
        <span>Name: </span><input id="name"></input><br />
        <span>Email Address: </span><input id="email"></input><br />
        <span>Password: </span><input id="password"></input><br />
        <button onClick={() => props.form1(
          document.getElementById("name").value,
          document.getElementById("email").value,
          document.getElementById("password").value
        )}>Next</button>
      </form>
    </div>
  )
}

//Second Form: Address, Phone Number
const Form2 = (props) => {
  return (
    <div>
      <div>Please fill out the following information</div><br />
      <div>Shipping Address: </div><br />
      <form>
        <span>Address Line 1: </span><input id="aline1"></input><br />
        <span>Address Line 2: </span><input id="aline2"></input><br />
        <span>City: </span><input id="city"></input><span>State: </span><input id="state"></input><br />
        <span>Zip Code: </span><input id="zip1"></input><br />
        <span>Phone Number: </span><input id="phone"></input><br />
        <button onClick={() => props.form2(
          props.name,
          document.getElementById("aline1").value,
          document.getElementById("aline2").value,
          document.getElementById("city").value,
          document.getElementById("state").value,
          document.getElementById("zip1").value,
          document.getElementById("phone").value
        )}>Next</button>
      </form>
    </div>
  )
}

//Third Form: Payment Info
const Form3 = (props) => {
  return (
    <div>
      <div>Please fill out the following information</div>
      <form>
        <span>Credit Card Number: </span><input id="card"></input><br />
        <span>Expiry Date: </span><input id="exp"></input><br />
        <span>CVV: </span><input id="cvv"></input><br />
        <span>Billing Zip: </span><input id="zip2"></input><br />
        <button onClick={() => props.form3(
          props.name,
          document.getElementById("card").value,
          document.getElementById("exp").value,
          document.getElementById("cvv").value,
          document.getElementById("zip2").value
        )}>Next</button>
      </form>
    </div>
  )
}

//Summary Page: Shows all the info passed in previously
const Summary = (props) => {

  return (
    <div>
      <div>Summary</div>
      <div>Name: {props.data.name}</div>
      <div>Email: {props.data.email}</div>
      <div>Phone Number: {props.data.phone} </div>
      <div>Password: {props.data.password}</div>
      <div>Address: {props.data.address}</div>
      <div>Credit Card: {props.data.payment}</div>
      <button onClick={() => {
        let summ = document.getElementById("app");
        ReactDOM.unmountComponentAtNode(summ);
        ReactDOM.render(<App />, document.getElementById("app"));
      }
      }>Purchase</button>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById("app"));