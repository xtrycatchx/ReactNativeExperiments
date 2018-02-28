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

    render() {
        return (
            <View style={{ flex: 1, padding: 10 }}>
                <Button
                    onPress={this.onPressHttpExperimentButton}
                    title="Http Experiment"
                />
                <Button
                    onPress={this.onPressPromiseExperimentButton}
                    title="Promise Experiment"
                />
            </View>
        );
    }
}

export default Main;