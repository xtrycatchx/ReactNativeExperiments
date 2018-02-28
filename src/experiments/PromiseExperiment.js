import React, { Component } from 'react';
import { Button, View, Text, NativeModules, AlertIOS } from 'react-native';

const promiseExperiment = NativeModules.PromiseExperiment;

class PromiseExperiment extends Component {

    constructor(props) {
        super(props);
    }

    executePromise = promise => {
        promise.then(data => {
            data ? AlertIOS.alert(`Success ${data}`) : AlertIOS.alert(`Success`)
        }).catch(err => {
            AlertIOS.alert(`${err}`)
        })
    }

    onPressPromiseWillResolveButton = () => this.executePromise(promiseExperiment.promiseWillResolve({}))

    onPressPromiseWillResolveWithParamsButton = () => this.executePromise(promiseExperiment.promiseWillResolveWithParams(new Date().toString()));

    onPressPromiseWillRejectButton = () => this.executePromise(promiseExperiment.promiseWillReject({}))

    render() {

        return (
            <View style={{ flex: 1, padding: 10 }}>

                <Button
                    onPress={this.onPressPromiseWillResolveButton}
                    title='XCode will Resolve'
                />

                <Button
                    onPress={this.onPressPromiseWillResolveWithParamsButton}
                    title='XCode will Resolve + params'
                />

                <Button
                    onPress={this.onPressPromiseWillRejectButton}
                    title='XCode will Reject + params'
                />

            </View>
        );
    }
}

export default PromiseExperiment;