
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkedOut:true,
            onForm1: false,
            onForm2: false,
            onForm3: false,
            onSummary: false
        }
        this.handleCheckout = this.handleCheckout.bind(this);
        this.handleForm1 = this.handleForm1.bind(this);
        this.handleForm2 = this.handleForm2.bind(this);
        this.handleForm3 = this.handleForm3.bind(this);
        this.handlePurchase = this.handlePurchase.bind(this);

    }

    handleCheckout() {
        this.setState({checkedOut:false, onForm1: true})
    }

    handleForm1() {
        this.setState({onForm1: false, onForm2: true})
        console.log(this.state)
    }

    handleForm2() {
        this.setState({onForm2: false, onForm3: true})
    }

    handleForm3() {
        this.setState({onForm3: false, onSummary: true})
    }

    handlePurchase() {
        this.setState({onSummary:false})
    }

    render() {
        return (
        <div>
            {this.state.checkedOut && <button onClick={this.handleCheckout}>Checkout</button>}
            {this.state.onForm1 && <Form1 next={this.handleForm1}/>}
            {this.state.onForm2 && <Form2 next={this.handleForm2}/>}
            {this.state.onForm3 && <Form3 next={this.handleForm3}/>}
            {this.state.onSummary && <Summary next={this.handlePurchase}/>}
        </div>
        )
    }
}

const Form1 = (props) => {
    return (
        <div>
            <span>Name: </span><input></input><br/>
            <span>Email: </span><input></input><br/>
            <span>Address: </span><input></input><br/>
            <button onClick={props.next}>Next</button>
        </div>
    )
}

const Form2 = (props) => {
    return (
        <div>
            <span>Address1: </span><input></input><br/>
            <span>Address2: </span><input></input><br/>
            <span>City: </span><input></input><br/>
            <span>State: </span><input></input><br/>
            <span>Zip: </span><input></input><br/>
            <span>Phone Number: </span><input></input><br/>
            <button onClick={props.next}>Next</button>
        </div>
    )
}

const Form3 = (props) => {
    return (
        <div>
            <span>Credit Card Number: </span><input></input><br/>
            <span>Expiry Date: </span><input></input><br/>
            <span>CVV: </span><input></input><br/>
            <span>Zip: </span><input></input><br/>
            <button onClick={props.next}>Purchase</button>
        </div>
    )
}

const Summary = (props) => {
    return (
        <div>
            Summary
        </div>
    )
}



ReactDOM.render(<App />, document.getElementById("app"));