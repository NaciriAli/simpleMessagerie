import React from 'react'
import { connect } from 'react-redux';
import store from '../store';

import {sendMessage, sendMessageAll, readLastMessage, readAllMessages, deleteMessage, deleteAllMessages} from '../actions/messageActions'

function messageContainer(props) {
  return (
    <div>
      <div>messageContainer</div>
      <button onClick={() => props.readLastMessage(props.message.senderIdentifiant)}>read last message</button>
      <div>Message: {props.message}</div>
    </div>
  )
}

const mapStateToProps = state => {
    return {
      content: state.message.content,
      senderIdentifiant: state.message.senderIdentifiant,
      recipientIdentifiant: state.message.recipientIdentifiant
    }
}
const mapDispatchToProps = dispatch => {
    return {
        sendMessage: () => dispatch(sendMessage()),
        sendMessageAll: () => dispatch(sendMessageAll()),
        readLastMessage: () => dispatch(readLastMessage()),
        readAllMessages: () => dispatch(readAllMessages()),
        deleteMessage: () => dispatch(deleteMessage()),
        deleteAllMessages: () => dispatch(deleteAllMessages())
    }
}

export default connect(mapDispatchToProps,mapDispatchToProps)(messageContainer)