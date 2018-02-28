import React, { Component } from 'react';
import { Button, View, AlertIOS} from 'react-native';

const END_POINT = 'https://jsonplaceholder.typicode.com'

class HttpExperiment extends Component {

    constructor(props) {
        super(props);
    }

    onPressPostButton = () => {
        fetch(`${END_POINT}/posts`, {
            method: 'POST',
            body: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then(response => response.json())
            .then(json => AlertIOS.alert(JSON.stringify(json)))
    };

    render() {

        return (
            <View style={{ flex: 1, padding: 10 }}>

                <Button
                    onPress={this.onPressPostButton}
                    title='Http Post'
                />

            </View>
        );
    }
}

export default HttpExperiment;