import React, { Component } from 'react';
import { Button, View } from 'react-native';

class Main extends Component {

    static navigationOptions = {
        title: 'Experiments',
    };

    constructor(props) {
        super(props);
    }

    onPressPromiseExperimentButton = () => {
        this.props.navigation.navigate("PromiseExperiment", {})
    };

    render() {
        return (
            <View style={{ flex: 1, padding: 10 }}>
                <Button
                    onPress={this.onPressPromiseExperimentButton}
                    title="Promise Experiment"
                />
            </View>
        );
    }
}

export default Main;