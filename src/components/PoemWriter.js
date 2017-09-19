import React from 'react';

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: '',
      isValid: true
    };
  }

  render() {
    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          value={this.state.poem}/>
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
