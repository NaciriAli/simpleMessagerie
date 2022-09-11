import React from 'react'
import { connect } from 'react-redux';
import store from '../store';

import {sendMessage, sendMessageAll, readLastMessage, readAllMessages, deleteMessage, deleteAllMessages} from '../actions/messageActions'

function messageContainer(props) {
  return (
    <div>
      <div>messageContainer</div>
      <button onClick={() => props.readLastMessage(props.senderIdentifiant)}>read last message</button>
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
        sendMessage: (data) => dispatch(sendMessage(data)),
        sendMessageAll: (data) => dispatch(sendMessageAll(data)),
        readLastMessage: (senderIdentifiant) => dispatch(readLastMessage(senderIdentifiant)),
        readAllMessages: (senderIdentifiant) => dispatch(readAllMessages(senderIdentifiant)),
        deleteMessage: (messageId) => dispatch(deleteMessage(messageId)),
        deleteAllMessages: (senderIdentifiant) => dispatch(deleteAllMessages(senderIdentifiant))
    }
}

export default connect(mapDispatchToProps,mapDispatchToProps)(messageContainer)