/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {
  Platform, 
  StyleSheet, 
  Text,
  TextInput, 
  View,
  Slider
} from 'react-native';

class ColorControl extends Component {

  sliderValueChange(value) {
    this.props.colorControlChanged(value)
  }

  render() {
    return (
      <View style={styles.colorSlider}>
        <Text>{ this.props.title }</Text>
        <Slider value={this.props.value} 
          style={{ width: 200, marginLeft: 5, marginRight: 5 }}
          minimumValue={0} maximumValue={255} step={1}
          onValueChange={this.sliderValueChange.bind(this)}
        >          
        </Slider>
        <View>
          <TextInput editable={false} value={ `${this.props.value}` } style={styles.textInput}></TextInput>
        </View>
      </View>
    )
  }
}

export default class App extends Component {

  constructor(props) {
    super(props)

    this.state = { red: 100, green: 150, blue: 200 }
  }

  onSliderValueChanged = (color) => {
    console.log(color)
    this.setState(color)
  }

  render() {
    return (
      <View style={styles.container}>

        { this.renderHeader() }

        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <View style={{width: 300, height: 350, flexDirection: 'column'}}>
            <View style={{flex: 1}}>
              <ColorControl title="R" value={this.state.red} colorControlChanged = { (value) => {
                const currentColor = this.state
                let newColor = {...currentColor, red: value}
                this.onSliderValueChanged(newColor)
              }} />
              <ColorControl title="G" value={this.state.green} colorControlChanged = { (value) => {
                const currentColor = this.state
                let newColor = {...currentColor, green: value}
                this.onSliderValueChanged(newColor)
              }} />
              <ColorControl title="B" value={this.state.blue} colorControlChanged = { (value) => {
                const currentColor = this.state
                let newColor = {...currentColor, blue: value}
                this.onSliderValueChanged(newColor)
              }} />
            </View>
            <View style={{flex: 1, backgroundColor: `rgb(${this.state.red}, ${this.state.green}, ${this.state.blue})`}}></View>
          </View>
        </View>

      </View>
    );
  }

  renderHeader = () => {
    return (
      <View style={styles.header}>
        <Text style={styles.headerText}>Color Picker</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECEFF1',
  },
  header: {
    height: 64,
    backgroundColor: '#FAFAFA',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: 'gray',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    elevation: 2
  },
  headerText: {
    fontFamily: 'Avenir',
    fontSize: 17,
    fontWeight: '500',
    ...Platform.select({
      ios: {
        marginTop: 20
      },
      android: {
        marginTop: 0
      }
    })
  },

  colorSlider: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textInput: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 30,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: 'gray',
    textAlign: 'center'
  }

});
