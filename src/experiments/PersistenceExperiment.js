import React, { Component } from 'react';
import { Button, View, Text } from 'react-native';
import { createRecord, readRecord, updateRecord, deleteRecord } from '../store/Persistence'

class PersistenceExperiment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: null
        }
    }

    updateUi(data) {
        this.setState({ data: data })
    }

    onPressCreateButton = () => {
        createRecord(1, new Date().toDateString()).then(data => {
            this.updateUi(data)
        });

    }

    onPressReadButton = () => {
        readRecord(1).then(data => {
            this.updateUi(data)
        });
    }

    onPressUpdateButton = () => {
        updateRecord(1, new Date().toDateString()).then(data => {
            this.updateUi(data)
        });
    }

    onPressDeleteButton = () => {
        deleteRecord(1).then(data => {
            this.updateUi(data)
        });
    }

    render() {

        return (
            <View style={{ flex: 1, padding: 10 }}>

                <Text>{this.state.data}</Text>

                <Button
                    onPress={() => this.onPressCreateButton()}
                    title='Create'
                />

                <Button
                    onPress={() => this.onPressReadButton()}
                    title='Read'
                />

                <Button
                    onPress={() => this.onPressUpdateButton()}
                    title='Update'
                />

                <Button
                    onPress={() => this.onPressDeleteButton()}
                    title='Delete'
                />

            </View>
        );
    }
}

export default PersistenceExperiment;