import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { requireNativeComponent, NativeAppEventEmitter } from 'react-native'

const ViewToController = requireNativeComponent('ViewToController', ViewToController)

export default class RnOpenNativeViewController extends Component {
    constructor(props) {
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
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff' }}>
                {
                    !this.state.kyc
                        ?
                        <ViewToController batmanMessage="ngeh!" style={{ height: 100, width: 100 }} {...this.props} />
                        :

                        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff' }}>
                            <TouchableHighlight activeOpacity={0.6} underlayColor={'white'} onPress={() => this.verifyToKycServer()} >
                                <Text style={styles.button} > Verify To KYC Server </Text>
                            </TouchableHighlight>
                        </View>
                }
            </View>
        )
        return
    }
}

RnOpenNativeViewController.propTypes = {
    exampleProp: PropTypes.string
}