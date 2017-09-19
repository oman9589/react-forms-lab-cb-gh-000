import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: '',
      isValid: false
    };
  }

  evaluatePoem = (event) => {
    this.setState({
      poem: event.target.value
    });
    var lines = this.state.poem.split(/\r|\r\n|\n/);
    var count = lines.length;
    if (count === 3) {
      if (lines[0].split(' ').length === 5 &&
          lines[1].split(' ').length === 3 &&
          lines[2].split(' ').length === 5) {
        this.setState({
          isValid: true
        });
      } else {
        this.setState({
          isValid: false
        });
      }
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
