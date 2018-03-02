import React, { Component } from 'react';
import { Button, View, Text, NativeModules, AlertIOS } from 'react-native';

class NativeUIExperiment extends Component {

    constructor(props) {
        super(props);
    }

    doSomething = () => {}

    render() {

        return (
            <View style={{ flex: 1, padding: 10 }}>

                <Button
                    onPress={this.doSomething}
                    title='XCode will Resolve'
                />
            </View>
        );
    }
}

export default NativeUIExperiment;