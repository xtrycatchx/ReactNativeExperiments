'use strict';

const doCall = (url, body) =>
    fetch(url, {
        body: JSON.stringify(body) || null,
        method: body ? 'POST' : 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    }).then(doResponse, doNetworkError);


const doResponse = response =>
    response.ok ? response.json() : response.json().then(error => {
        throw error;
    });

const doNetworkError = error => {
    throw {
        msg: error.message
    };
}

exports.get = doCall;
exports.post = doCall;