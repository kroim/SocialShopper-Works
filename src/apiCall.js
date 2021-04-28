const axios = require('axios');

const API_BASE_URL = (process.env.NODE_ENV === 'production'? '/api':'http://localhost:4000/api');

export const postCall = (action, data, successCallback, failCallback = null) => {
    let token = localStorage.getItem('token');
    let headers = { 'Content-Type': 'application/json' };
    if(token){
        headers['x-access-token'] = token;
    }
    console.log('postCall ', data, headers);
    axios.post(
        `${API_BASE_URL}${action}`,
        data,
        {
            headers: headers
        }
    ).then((result) => {
        console.log('postCall Success :', result.data.data);
        successCallback(result.data.data);
    }).catch((error) => {
        console.log('postCall Failed', error);
        if(failCallback) {
            failCallback(error);
        }
    })
}

export const getCall = (action, data, successCallback, failCallback = null) => {
    let token = localStorage.getItem('token');
    let headers = { 'Content-Type': 'application/json' };
    if(token){
        headers['x-access-token'] = token;
    }

    axios.get(
        `${API_BASE_URL}${action}`,
        { params: data, headers: headers}
    ).then((result) => {
        console.log('getCall Success :', result.data);
        successCallback(result.data);
    }).catch((error) => {
        console.log('getCall Failed', error);
        if(failCallback) {
            failCallback(error);
        }
    })
}