import React, { Component } from 'react';
import { Button, View, AlertIOS, Text, ScrollView } from 'react-native';
class ScrollExperiment extends Component {
  render() {
    return (
      <ScrollView>
        <View style={{ flex: 1, padding: 10}}>
          <Text style={{marginTop: 45}}>1</Text>
          <Text style={{marginTop: 45}}>2</Text>
          <Text style={{marginTop: 45}}>3</Text>
          <Text style={{marginTop: 45}}>4</Text>
          <Text style={{marginTop: 45}}>5</Text>
          <Text style={{marginTop: 45}}>6</Text>
          <Text style={{marginTop: 45}}>7</Text>
          <Text style={{marginTop: 45}}>8</Text>
          <Text style={{marginTop: 45}}>9</Text>
          <Text style={{marginTop: 45}}>10</Text>
        </View>
      </ScrollView>
    )
  }
}
export default ScrollExperiment;