import React from 'react';

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      chars: 0
    };
  }

  handleChange = () => {
    this.setState({
      value.
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.handleChange} value={this.state.value} />
        <p>{this.props.maxChars - this.state.chars} chars left</p>
      </div>
    );
  }
}

export default TwitterMessage;
