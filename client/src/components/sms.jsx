import React from 'react';
import 'whatwg-fetch';

export default class Sms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipient: '',
      message:''
    };
  }
  changeNumber(event) {
    this.setState({recipient: event.target.value});
  }

  changeMessage(event) {
    this.setState({message: event.target.value});
  }

  sendSms() {
    fetch('/api/sendsms', {
      method: 'POST',
      headers: {
        Accept: 'application/JSON',
        'Content-Type': 'application/JSON'
      },
      body: JSON.stringify({"recipient": this.state.recipient, "message": "Please come get me"})
    });
  }

  render() {
    return (
      <div>
      {/* <p>Enter Message: </p> */}
    {/* <input onChange={this.changeMessage.bind(this)} value={this.state.message} placeholder="Save Me"/> */}
        <button onClick={this.sendSms.bind(this)}>Send message</button>

      </div>
    );
  }
}
