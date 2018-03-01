'use strict';

const doCall = (url, body) => {
    const opt = {
        body: JSON.stringify(body) || null,
        method: body ? 'POST' : 'GET',
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    }
    return fetch(url, opt).then(doResponse, doNetworkError);
}

const doResponse = (response) => {
    if (response.ok) {
        return response.json();
    } else {
        return response.json().then(error => {
            throw error;
        });
    }
}

const doNetworkError = error => {
    throw {
        msg: error.message
    };
}

exports.get = doCall;
exports.post = doCall;