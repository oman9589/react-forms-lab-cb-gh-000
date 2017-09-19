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
      ...this.state,
      poem: event.target.value
    });

    var lines = this.state.poem.split(/\r|\r\n|\n/);
    var count = lines.length;
    if (count === 3) {
      this.setState({
        ...this.state,
       isValid: true
      });
    // } else {
    //   this.setState({
    //     ...this.state,
    //     isValid: false
    //   });
    //}
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
