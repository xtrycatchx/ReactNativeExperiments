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
        return <ViewToController batmanMessage="ngeh!" style={{ height: 100, width: 100 }} {...this.props} />
    }
}

RnOpenNativeViewController.propTypes = {
    exampleProp: PropTypes.string
}