import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { requireNativeComponent, NativeAppEventEmitter, View, TouchableHighlight, Text } from 'react-native'

const ViewToController = requireNativeComponent('ViewToController', ViewToController)

export default class RnOpenNativeViewController extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nativeIsOpen: false
        }
        NativeAppEventEmitter.addListener('onLoaded', event => {
            this.setState({
                nativeIsOpen: !this.state.nativeIsOpen
            })
        });
    }
    render() {
        //return <ViewToController batmanMessage="ngeh!" style={{ height: 100, width: 100 }} {...this.props} />
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff' }}>
                {
                    !this.state.nativeIsOpen
                        ?
                        <ViewToController batmanMessage="ngeh!" style={{ height: 100, width: 100 }} {...this.props} />
                        :
                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff' }}>
                            <TouchableHighlight activeOpacity={0.6} underlayColor={'white'} onPress={() =>this.props.navigation.navigate("Main", {})} >
                                <Text> Now back in React Native </Text>
                            </TouchableHighlight>
                        </View>
                }
            </View>
        )
    }
}

RnOpenNativeViewController.propTypes = {
    exampleProp: PropTypes.string
}