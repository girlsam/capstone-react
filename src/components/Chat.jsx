import React, { Component } from 'react';
import ReactDOM from 'react-dom';

let socket;

export default class Chat extends Component {
  constructor(props) {

    super(props);

    this.state = { messages: [] };
    this.sendChat = this.sendChat.bind(this);
  }

  componentDidMount() {
    socket = io.connect('https://newmate.herokuapp.com');
    socket.on('message', (data) => {
      console.log(data);
      this.setState({
        messages: this.state.messages.concat(data)
      })
    })
  }

  sendChat(e) {
    e.preventDefault();
    let message = this.refs.message.value;
    this.refs.message.value = '';
    socket.emit('send', {
      message: message,
      from: 'user2'
    })
  }

  render() {
    return (
      <div>
        <div className="chat_s">
          {this.state.messages.map(el => {
            return (
              <div className={el.from}>
                {el.message}
              </div>
            )}
          )}
        </div>
        <form onSubmit={(this.sendChat)}>
          <div className="chat_input">
            <input ref="message" placeholder="Send a Message..." className="chat_text" />
            <button type="submit" className="chat_submit fa fa-send"></button>
          </div>
        </form>
        </div>
    );
  }
}
