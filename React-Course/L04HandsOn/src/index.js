import React from 'react';
import ReactDOM from 'react-dom';

// const App = props => {
//     const fruits = ['Apples', 'Oranges', 'Mangos', 'Pears', 'Grapes'];

//     return <List fruits = {fruits} />
// };

// const List = props => {
//     const listCars = props.fruits.map((fruit, index) => (
//         <li key = {index} > {fruit} </li>
//     ));
//     return <ul>{listCars}</ul>
// };

// ReactDOM.render(<App />, document.getElementById('root'));

class NumberOfStudents extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            enrolledStudents: 0,
            waitlistedStudents: 0,
            addAmountEnrolled: 0,
            addAmountWaitlisted: 0
        };
    }

    incrementEnrolledByOne(){
        this.setState({ enrolledStudents: this.state.enrolledStudents + 1 })
    }

    incrementWaitlistByOne(){
        this.setState({ waitlistedStudents: this.state.waitlistedStudents + 1 })
    }

    incrementEnrolledByMany(){
        this.setState({ enrolledStudents: this.state.enrolledStudents + parseInt(this.state.addAmountEnrolled) })
    }

    incrementWaitlistByMany(){
        this.setState({ waitlistedStudents: this.state.waitlistedStudents + parseInt(this.state.addAmountWaitlisted) })
    }

    render() {
        return (
            <div>
                <h3>Enrolled Students: {this.state.enrolledStudents}</h3>
                <button onClick={this.incrementEnrolledByOne.bind(this)}>Add 1 Enrolled Student</button>
                <h4>Add Multiple Enrolled Students</h4>
                <input type='number' 
                    onChange={ event => this.setState({ addAmountEnrolled: event.target.value })}
                    value={this.state.addAmount} />
                <button onClick={this.incrementEnrolledByMany.bind(this)}>Increase Students</button>


                <h3>Waitlisted Students: {this.state.waitlistedStudents}</h3>
                <button onClick={this.incrementWaitlistByOne.bind(this)}>Add 1 Waitlisted Student</button>
                <h4>Add Multiple Waitlisted Students</h4>
                <input type='number' 
                    onChange={ event => this.setState({ addAmountWaitlisted: event.target.value })}
                    value={this.state.addAmount} />
                <button onClick={this.incrementWaitlistByMany.bind(this)}>Increase Students</button>

            </div>
        )
    }
}

ReactDOM.render(<NumberOfStudents />, document.getElementById('root'));