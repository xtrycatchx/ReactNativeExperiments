import React, { Component } from 'react';
import { Button, View, } from 'react-native';

class HttpExperiment extends Component {

    constructor(props) {
        super(props);
    }

    onPressPostButton = () => {
        //
    };

    render() {

        return (
            <View style={{ flex: 1, padding: 10 }}>

                <Button
                    onPress={this.onPressPostButton}
                    title='Http stuff'
                />

            </View>
        );
    }
}

export default HttpExperiment;