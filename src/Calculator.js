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

  render() {
    const {result, num1, num2} = this.state
    return (
      <div>
        <h1>Result: {result}</h1>
        <input onChange={this.handleFirstNum} placeholder="First number" value={this.state.num1} />
        <input onChange={this.handleSecondNum} placeholder="Second number" value={this.state.num2} />
      </div>
    );
  }
}

export default Calculator;
