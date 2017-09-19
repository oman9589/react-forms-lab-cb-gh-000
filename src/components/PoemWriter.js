import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: '',
      isValid: false
    };
  }

  evaluatePoem = () => {
    lines = () => { return this.split(/\r*\n/); }
    lineCount = () => { return this.lines().length; }
    if (this.lines().length == 3) {
      this.setState({
        ...this.state,
        isValid: true
      })
    }
  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.poem}
          onChange={this.evaluatePoem}/>
        <div
          id="poem-validation-error"
          style={{color: 'red'}}>
          {this.state.isValid ? '' : 'This poem is not written in the right structure!'}
        </div>
      </div>
    );
  }
}

export default PoemWriter;
