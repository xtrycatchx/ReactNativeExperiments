import React, { Component } from 'react';
import { Button, View } from 'react-native';

class PersistenceExperiment extends Component {

    constructor(props) {
        super(props);
    }

    onDoSomething = () => {

    }

    render() {

        return (
            <View style={{ flex: 1, padding: 10 }}>

                <Button
                    onPress={this.onDoSomething}
                    title='Create'
                />

                <Button
                    onPress={this.onDoSomething}
                    title='Read'
                />

                <Button
                    onPress={this.onDoSomething}
                    title='Update'
                />

                <Button
                    onPress={this.onDoSomething}
                    title='Delete'
                />

            </View>
        );
    }
}

export default PersistenceExperiment;