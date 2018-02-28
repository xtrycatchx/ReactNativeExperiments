import React, { Component } from 'react';
import { Button, View, AlertIOS } from 'react-native';
import { get, post } from '../rest/RestJson'

const END_POINT = 'https://jsonplaceholder.typicode.com'

class HttpExperiment extends Component {

    constructor(props) {
        super(props);
    }

    onPressPostButton = () => {
        const body = {
            title: 'foo',
            body: 'bar',
            userId: 1
        }
        post(`${END_POINT}/posts`, body).then(function (json) {
            AlertIOS.alert(JSON.stringify(json));
        }).catch(function (error) {
            console.error(error.msg);
        });
    };

    onPressGetButton = () => {
        get(`${END_POINT}/posts/1`).then(function (json) {
            AlertIOS.alert(JSON.stringify(json));
        }).catch(function (error) {
            console.error(error.msg);
        });
    };

    render() {

        return (
            <View style={{ flex: 1, padding: 10 }}>

<Button
onPress={this.onPressPostButton}
title='Http Post'
/>

<Button
                    onPress={this.onPressGetButton}
                    title='Http Get'
                />

            </View>
        );
    }
}

export default HttpExperiment;