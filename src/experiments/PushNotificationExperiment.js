import React, { Component } from 'react';
import { View, Text, StyleSheet, Picker, AppState, Platform } from 'react-native';
import PushHandler from '../push/PushHandler';
import PushNotification from 'react-native-push-notification';

class PushNotificationExperiment extends Component {

    constructor(props) {
        super(props);
        this.handleAppStateChange = this.handleAppStateChange.bind(this);
        this.state = {
            seconds: 5,
        };
    }

    componentDidMount() {
        AppState.addEventListener('change', this.handleAppStateChange);
    }

    componentWillUnmount() {
        AppState.removeEventListener('change', this.handleAppStateChange);
    }

    handleAppStateChange(appState) {
        if (appState === 'background') {
            let date = new Date(Date.now() + (this.state.seconds * 1000));

            if (Platform.OS === 'ios') {
                //date = date.toISOString();
            }

            PushNotification.localNotificationSchedule({
                message: "My Notification Message",
                date,
            });
        }
    }

    onPressPromiseWillResolveButton = () => this.executePromise(promiseExperiment.promiseWillResolve({}))

    onPressPromiseWillResolveWithParamsButton = () => this.executePromise(promiseExperiment.promiseWillResolveWithParams(new Date().toString()));

    onPressPromiseWillRejectButton = () => this.executePromise(promiseExperiment.promiseWillReject({}))

    render() {

        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Text>Pick Time in secs.</Text>
                <Picker
                    style={{ width: 100 }}
                    selectedValue={this.state.seconds}
                    onValueChange={(seconds) => this.setState({ seconds })}
                >
                    <Picker.Item label="5" value={5} />
                    <Picker.Item label="10" value={10} />
                    <Picker.Item label="15" value={15} />
                </Picker>
                <PushHandler />
            </View>
        );
    }
}

export default PushNotificationExperiment;