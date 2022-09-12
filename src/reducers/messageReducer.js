import * as type from "../actions/messageActionTypes";

const initialState = {
    message: {
        content: '',
        senderIdentifiant: 'A2',
        recepientIdentifiant: ''
    }
}

export const messageReducer = (state = initialState, action) => {
    switch(action.type){
        case (type.MESSAGE_SENT_SUCCEFULY || type.MESSAGE_DELETED || type.ALL_MESSAGES_DELETED):
            return {
                ...state
            }
        case type.MESSAGE_READED || type.ALL_MESSAGES_READED:
            return {
                ...state,
                message: action.payload
            }
        case (type.MESSAGE_SENT_FAILED || type.MESSAGE_FAILED_READED || type.MESSAGE_FAILED_DELETED):
            return {
                ...state,
                message: null
            }
        default:
            return state;
    }
}