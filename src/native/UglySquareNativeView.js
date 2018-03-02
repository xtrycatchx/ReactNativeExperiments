//  Created by react-native-create-bridge

import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { requireNativeComponent } from 'react-native'

const UglySquare = requireNativeComponent('UglySquare', UglySquareView)

export default class UglySquareView extends Component {
  render () {
    return <UglySquare {...this.props} />
  }
}

UglySquareView.propTypes = {
  exampleProp: PropTypes.string
}
