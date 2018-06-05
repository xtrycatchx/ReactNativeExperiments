import React, { Component } from 'react';
import { Button, View } from 'react-native';

class Main extends Component {

    static navigationOptions = {
        title: 'Experiments',
    };

    constructor(props) {
        super(props);
    }

    onPressHttpExperimentButton = () => {
        this.props.navigation.navigate("HttpExperiment", {})
    };

    onPressPromiseExperimentButton = () => {
        this.props.navigation.navigate("PromiseExperiment", {})
    };

    onPressPersistenceExperimentButton = () => {
        this.props.navigation.navigate("PersistenceExperiment", {})
    }

    onPressNativeUIExperimentButton = () => {
        this.props.navigation.navigate("NativeUIExperiment", {})
    }

    onPressNativeEventsExperimentButton = () => {
        this.props.navigation.navigate("NativeEventsExperiment", {})
    }

    onPressPushNotificationExperimentButton = () => {
        this.props.navigation.navigate("PushNotificationExperiment", {})
    }

    onPressOpenNativeViewControllerButton = () => {
        this.props.navigation.navigate("RnOpenNativeViewController", {})
    }

    onPressOpenScrollViewExperiment = () => {
        this.props.navigation.navigate("ScrollExperiment", {})
    };

    render() {
        return (
            <View style={{ flex: 1, padding: 10 }}>
                <Button
                    onPress={this.onPressHttpExperimentButton}
                    title="Http Experiment"
                />
                <Button
                    onPress={this.onPressPersistenceExperimentButton}
                    title="Persistence Experiment"
                />
                <Button
                    onPress={this.onPressPromiseExperimentButton}
                    title="Promise Experiment"
                />

                <Button
                    onPress={this.onPressNativeUIExperimentButton}
                    title="Native UI Experiment"
                />
                <Button
                    onPress={this.onPressNativeEventsExperimentButton}
                    title="Native Events Experiment"
                />

                <Button
                    onPress={this.onPressPushNotificationExperimentButton}
                    title="Push Notification Experiment"
                />

                <Button
                    onPress={this.onPressOpenNativeViewControllerButton}
                    title="Open a Native View Controller"
                />

                <Button
                    onPress={this.onPressOpenScrollViewExperiment}
                    title="ScrollView Experiment"
                />
            </View>
        );
    }
}

export default Main;