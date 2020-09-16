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

  render() {
    const {result, num1, num2} = this.state
    return (
      <div>
        <h1>Result: {result}</h1>
      </div>
    );
  }
}

export default Calculator;
