import React from 'react';

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ''
    };
  }

  handleChange = () => {

  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleChange} value={this.state.value} />
        <p>{this.props.maxChars - this.state.value.lenth} chars left</p>
      </div>
    );
  }
}

export default TwitterMessage;
