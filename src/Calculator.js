import React from "react";

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        result: 0,
        num1: '',
        num2: '',
    }
  }

  handleFirstNum = e => {
      this.setState({ num1: e.target.value });
  }

  handleSecondNum = e => {
    this.setState({
      num2 : e.target.value
    })
  }

  add = e => {
    let {result, num1, num2} = this.state
    result = parseInt(num1) + parseInt(num2)
    this.setState({ result })
  }

  subtract = e => {
    let {result, num1, num2} = this.state
    result = parseInt(num1) - parseInt(num2)
    this.setState({ result })
  }

  multiply = e => {
    let {result, num1, num2} = this.state
    result = parseInt(num1) * parseInt(num2)
    this.setState({ result })
  }

  divide = e => {
    let {result, num1, num2} = this.state
    result = parseInt(num1)/parseInt(num2)
    this.setState({ result })
  }

  render() {
    const {result, num1, num2} = this.state
    return (
      <div>
        <h1>Result: {result}</h1>
        <input onChange={this.handleFirstNum} placeholder="First number" value={this.state.num1} />
        <input onChange={this.handleSecondNum} placeholder="Second number" value={this.state.num2} />
        <button onClick={this.add}>+</button>
        <button onClick={this.subtract}>-</button>
        <button onClick={this.multiply}>x</button>
        <button onClick={this.divide}>/</button>
      </div>
    );
  }
}

export default Calculator;
