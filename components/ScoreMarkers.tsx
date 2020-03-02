import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    height: "20%",
    marginBottom: "5%"
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    color: "#eac206",
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    fontSize: 25
  },
  button: {
    borderColor: "black",
    borderWidth: 3,
    marginLeft: "3.5%"
  },
  icon: {
    width:"15%",
    marginLeft: "0%"
  },
  button_1000: {
    width:"35%"
  },
  button_100: {
    width:"25%"
  },
  button_10: {
    width:"15%"
  }
});

export class ScoreMarkers extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <View style={styles.buttons}>
        <Text style={[styles.button, styles.text, styles.icon]}>{this.props.operation}</Text>

        <TouchableOpacity style={[styles.button, styles.button_1000]} onPress={()=>{this.props.action(1000, this.props.player)}}>
          <Text style={styles.text}>1000</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.button_100]} onPress={()=>{this.props.action(100, this.props.player)}}>
          <Text style={styles.text}>100</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.button_10]} onPress={()=>{this.props.action(10, this.props.player)}}>
          <Text style={styles.text}>10</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
