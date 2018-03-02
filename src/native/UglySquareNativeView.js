//  Created by react-native-create-bridge

import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { requireNativeComponent } from 'react-native'

const UglySquare = requireNativeComponent('UglySquare', UglySquareView)

export default class UglySquareView extends Component {
  render() {
    return <UglySquare batmanMessage="RAWRRR!" style={{ height: 100, width: 100 }} {...this.props} />
  }
}

UglySquareView.propTypes = {
  exampleProp: PropTypes.string
}
