import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#ccc",
    borderColor: "black",
    borderWidth: 3,
    width:"100%", 
    height: "100%"
  },
  text: {
    fontSize: 100,
    padding: 0,
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    color: "#eac206",
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 5},
    textShadowRadius: 10
  },
  playerOne: {
    color: "#6777f5"
  },
  playerTwo: {
    color: "#eb7067"
  },
  newGame: {
    fontSize: 25
  },
  newGameButton: {
    borderColor: "black",
    borderRadius: 10,
    borderWidth: 3,
    width:"90%",
    marginLeft: "3.5%"
  },
});

export class GameEnded extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <View style={styles.body}>
        <Text style={this.props.winner === "Player One" ? [styles.text, styles.playerOne] : [styles.text, styles.playerTwo]}>{this.props.winner}</Text>
        <Text style={styles.text}>Wins!</Text>

        <TouchableOpacity style={styles.newGameButton} onPress={()=>{this.props.resetGame()}}>
          <Text style={[styles.text, styles.newGame]}>Começar nova partida</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
