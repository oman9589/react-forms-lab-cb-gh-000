import React from 'react';

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      numChars: 0
    };
  }

  handleChange = () => {

  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleChange} />
        <p>{this.props.maxChars - this.state.numChars} chars left</p>
      </div>
    );
  }
}

export default TwitterMessage;
