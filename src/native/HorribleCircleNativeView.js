import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { requireNativeComponent } from 'react-native'

const HorribleCircle = requireNativeComponent('HorribleCircle', HorribleCircle)

export default class HorribleCircleView extends Component {
  render() {
    return <HorribleCircle batmanMessage="ngeh!" style={{ height: 100, width: 100 }} {...this.props} />
  }
}

HorribleCircle.propTypes = {
  exampleProp: PropTypes.string
}