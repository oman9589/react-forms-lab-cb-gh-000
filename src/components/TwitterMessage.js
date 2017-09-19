import React from 'react';

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      numChars: 0
    };
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" />
        <p>
      </div>
    );
  }
}

export default TwitterMessage;