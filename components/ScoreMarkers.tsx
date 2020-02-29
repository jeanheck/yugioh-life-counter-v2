import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    height: "20%",
    marginBottom: "5%",
    borderColor: "green",
    borderWidth: 0
  },
  icon: {
    borderColor: "black",
    borderWidth: 3,
    width:"15%",
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    color: "#eac206",
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    fontSize: 25
  },
  button_1000: {
    borderColor: "black",
    borderWidth: 3,
    width:"35%",
    marginLeft: "3.5%"
  },
  text_1000: {
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    color: "#eac206",
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    fontSize: 25
  },
  button_100: {
    borderColor: "black",
    borderWidth: 3,
    width:"25%",
    marginLeft: "3.5%"
  },
  text_100: {
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    color: "#eac206",
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    fontSize: 25
  },
  button_10: {
    borderColor: "black",
    borderWidth: 3,
    width:"15%",
    marginLeft: "3.5%"
  },
  text_10: {
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    color: "#eac206",
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    fontSize: 25
  }
});

export class ScoreMarkers extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <View style={styles.buttons}>
        <Text style={styles.icon}>{this.props.operation}</Text>

        <TouchableOpacity style={styles.button_1000} onPress={()=>{this.props.action(1000, this.props.player)}}>
          <Text style={styles.text_1000}>1000</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button_100} onPress={()=>{this.props.action(100, this.props.player)}}>
          <Text style={styles.text_100}>100</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button_10} onPress={()=>{this.props.action(10, this.props.player)}}>
          <Text style={styles.text_10}>10</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
