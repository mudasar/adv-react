import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

export class App extends Component {
  static propTypes = {

  }

  state = {
      answer:42
  }

  async asyncFunction (){
      return Promise.resolve(37);
  }

  async componentDidMount() {
      let answer = await this.asyncFunction();

      this.setState(
          {
              answer: answer
            }
        );
  }

  render() {
    return (
      <div>
      <h2>React App</h2>
        {this.state.answer}
      </div>
    )
  }
}


ReactDOM.render(<App />, document.getElementById('root'));