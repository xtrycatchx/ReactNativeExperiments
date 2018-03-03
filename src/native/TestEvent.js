import React, { Component } from 'react'
import { NativeEventEmitter, NativeModules, Text, AlertIOS } from 'react-native';
const { EventTest } = NativeModules;

const eventTestEmitter = new NativeEventEmitter(EventTest);

export default class TestEvent extends Component {

    constructor(props) {
        super(props);
    }

    subscription = () => {
        return eventTestEmitter.addListener(
            'EventReminder',
            (reminder) => AlertIOS.alert(`Experiment RN ${reminder.name}`)
        )
    }

    componentWillUnmount() {
        subscription.remove();
    }
    render() {
        return <Text>Wait ...</Text>
    }
}



