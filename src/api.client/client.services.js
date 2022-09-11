import axios from 'axios';
import * as type from '../utils/constants';
const URL = type.default;

const send_Message = (data) => {
    return axios.post(URL.API_URL_V1 + "/send-message", data/*, authHeader()*/);
};

const send_MessageAll = (data) => {
    return axios.post(URL.API_URL_V1 + "/send-message-all"/*, authHeader()*/);
};

const read_LastMessage = (senderIdentifiant) => {
    console.log("from read_LastMessage",senderIdentifiant);
    return axios.get(URL.API_URL_V1 + `/read-last-message/${senderIdentifiant}`);
};

const read_AllMessages = (senderIdentifiant) => {
    return axios.get(URL.API_URL_V1 + `/read-all-messages/${senderIdentifiant}`/*,authHeader()*/);
};

const delete_Message = (messageId) => {
    return axios.delete(URL.API_URL_V1 + `/delete-message/${messageId}`/*,authHeader()*/);
}

const delete_AllMessages = (senderIdentifiant) => {
    return axios.delete(URL.API_URL_V1 + `/delete-all-messages/${senderIdentifiant}`/*,authHeader()*/);
}

export {send_Message, send_MessageAll, read_LastMessage, read_AllMessages, delete_Message, delete_AllMessages}