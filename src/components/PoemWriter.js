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
    String.prototype.lines = function() { return this.split(/\r*\n/); }
    String.prototype.lineCount = function() { return this.lines().length; }
  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.poem}
          onChange={evaluatePoem}/>
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
