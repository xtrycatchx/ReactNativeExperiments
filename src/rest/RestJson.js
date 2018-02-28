'use strict';

function doCall(url, body) {
    let opt = {};
    opt.body = JSON.stringify(body) || null
    //opt.headers['X-API-KEY'] = 'unya-na';
    opt.method = body ? 'POST' : 'GET'
    opt.headers = {
        "Content-type": "application/json; charset=UTF-8"
    }
    return fetch(url, opt).then(doResponse, doNetworkError);
}

function doResponse(response) {
    if (response.ok) {
        return response.json();
    } else {
        return response.json().then((error) => {
            throw error;
        });
    }
}

function doNetworkError(error) {
    throw {
        msg: error.message
    };
}
module.exports.get = doCall;
module.exports.post = doCall;