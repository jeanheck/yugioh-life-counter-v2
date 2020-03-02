import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  buttons: {
    flexDirection: 'row',
    height: "20%",
  },
  button: {
    borderColor: "black",
    borderWidth: 3,
    width:"20%"
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
  input: {
    marginLeft: "3.5%",
    marginRight: "3.5%",
    width: "50%"
  }
});

export class ScoreSpecialMarkers extends Component {
  constructor(props){
    super(props)

    this.state = {
      typedLifePoints: ''
    }
  }

  do(action, points, player){
    this.state.typedLifePoints = "";
    
    action(points, player);
  }

  render() {
    return (
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={()=>{this.do(this.props.add, this.state.typedLifePoints, this.props.player)}}>
          <Text style={styles.text}>+</Text>
        </TouchableOpacity>

        <TextInput style={styles.input} placeholder="Digite aqui um valor" keyboardType="numeric" value={this.state.typedLifePoints} onChangeText={(typedLifePoints) => this.setState({typedLifePoints})} />

        <TouchableOpacity style={styles.button} onPress={()=>{this.do(this.props.sub, this.state.typedLifePoints, this.props.player)}}>
          <Text style={styles.text}>-</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
