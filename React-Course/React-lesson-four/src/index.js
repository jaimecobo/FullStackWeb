import React from 'react';
import ReactDOM from 'react-dom';

// const Hello = props => {
//     <div>
//         <h1>Hello, {props.name}! </h1>
//     </div>
// }



// const App = props => {
//     return (
//         <div>
//             <Hello name="Nikki" />
//             <Hello name="Michael" />
//             <Hello name="Andrew" />
//         </div>
//     )
// }
// class Hello extends React.Component {
//     render(){
//         return (
//             <div>
//                 <h1>Hello, {this.props.name}! </h1>
//             </div>
//         )
//     }
// }

// ReactDOM.render(<App />, document.getElementById('root'));

// const App = () => {
//     return (
//         <div>
//             <BankAccount />
//         </div>
//     )
// }

// class BankAccount extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             savings:{
//                 accountBalance: 25.00
//             },
//             checking:{
//                 accountBalance: 530.64
//             }
//         };
//     }
//     render(){
//         return(
//             <div>
//                 <h3>Savings Account Balance: {this.state.savings.accountBalance}</h3>
//                 <h3>Checking Account Balance: {this.state.checking.accountBalance}</h3>
//             </div>
//         )
//     }
// }

// ReactDOM.render(<App />, document.getElementById('root'));


// class Text extends React.Component {
//     constructor(){
//         super();
//         this.state = {
//             text: 'Hello World!'
//         }
//     }

//     update(event){
//         this.setState({ text: event.target.value })
//     }

//     render(){
//         return (
//             <div>
//                 <input type='text' onChange={this.update.bind(this)} />
//                 <h1>{this.state.text}</h1>
//             </div>
//         )
//     }
// }
// ReactDOM.render(<Text />, document.getElementById('root'));



class BankAccount extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            accountBalance: 2222.22,
            addAmount: 0
        };
    }
    increment(){
        this.setState({ accountBalance: this.state.accountBalance + parseInt(this.state.addAmount) })
    }

    render() {
        return (
            <div>
                <h3>Account Balance: ${this.state.accountBalance}</h3>
                <input type='number' 
                    onChange={ event => this.setState({ addAmount: event.target.value })}
                    value={this.state.addAmount} />
                <button onClick={this.increment.bind(this)}>Increase Amount</button>
            </div>
        )
    }
}

ReactDOM.render(<BankAccount />, document.getElementById('root'));