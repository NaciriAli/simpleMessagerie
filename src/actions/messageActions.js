import * as type from "./messageActionTypes";
import {send_Message, send_MessageAll, read_LastMessage, read_AllMessages, delete_Message, delete_AllMessages} from "../api.client/client.services"

export const sendMessage = (data) => (dispatch) => {
    return send_Message(data).then(response => {
        dispatch({
            type: type.MESSAGE_SENT_SUCCEFULY,
        });
        return Promise.resolve();
    }, error => {
        const message = error.response.data || error;

        dispatch({
            type: type.MESSAGE_SENT_FAILED,
            payload: message
        });
        return Promise.reject();
    }
    )
}

export const sendMessageAll = (data) => (dispatch) => {
    return send_MessageAll(data).then(response => {
        dispatch({
            type: type.MESSAGE_SENT_SUCCEFULY,
        });
        return Promise.resolve();
    }, error => {
        const message = error.response.data || error;

        dispatch({
            type: type.MESSAGE_SENT_FAILED,
            payload: message
        });
        return Promise.reject();
    }
    )
}

export const readLastMessage = (senderIdentifiant) => (dispatch) => {
    return read_LastMessage(senderIdentifiant).then(response => {
        dispatch({
            type: type.MESSAGE_READED,
            payload: response.data
        });
        return Promise.resolve();
    }, error => {
        const message = error.response.data || error;

        dispatch({
            type: type.MESSAGE_FAILED_READED,
            payload: message
        });
        return Promise.reject();
    }
    )
}

export const readAllMessages = (senderIdentifiant) => (dispatch) => {
    return read_AllMessages(senderIdentifiant).then(response => {
        dispatch({
            type: type.ALL_MESSAGES_READED,
            payload: response.data
        });
        return Promise.resolve();
    }, error => {
        const message = error.response.data || error;

        dispatch({
            type: type.MESSAGE_FAILED_READED,
            payload: message
        });
        return Promise.reject();
    }
    )
}

export const deleteMessage = (senderIdentifiant) => (dispatch) => {
    return delete_Message(senderIdentifiant).then(response => {
        dispatch({
            type: type.MESSAGE_DELETED,
        });
        return Promise.resolve();
    }, error => {
        const message = error.response.data || error;

        dispatch({
            type: type.MESSAGE_FAILED_DELETED,
            payload: message
        });
        return Promise.reject();
    }
    )
}

export const deleteAllMessages = (senderIdentifiant) => (dispatch) => {
    return delete_AllMessages(senderIdentifiant).then(response => {
        dispatch({
            type: type.ALL_MESSAGES_DELETED
        });
        return Promise.resolve();
    }, error => {
        const message = error.response.data || error;

        dispatch({
            type: type.MESSAGE_FAILED_DELETED,
            payload: message
        });
        return Promise.reject();
    }
    )
}

