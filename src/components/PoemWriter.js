import React from 'react';


class PoemWriter extends React.Component {

  countWords = (line) => {
    return line.split(' ').filter(l => l).length;
  }

  isValidPoem = () => {
    const poemLines = this.state.poem.split('\n').filter(l => l);
    const isRightAmountOfLines = poemLines.length === 3;
    const hasRightAmountOfWords = this.countWords(poemLines[0]) === 5 && this.countWords(poemLines[1]) === 3 && this.countWords(poemLines[2]) === 5;
    return isRightAmountOfLines && hasRightAmountOfWords;
  }

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
