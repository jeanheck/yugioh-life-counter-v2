import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  gameEnd: {
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
  playerOneWins: {
    fontSize: 100,
    padding: 0,
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    color: "#6777f5",
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 5},
    textShadowRadius: 10
  },
  playerTwoWins: {
    fontSize: 100,
    padding: 0,
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    color: "#eb7067",
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 5},
    textShadowRadius: 10
  },
  newGame: {
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    color: "#eac206",
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
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
      <View style={styles.gameEnd}>
        <Text style={this.props.winner === "Player One" ? styles.playerOneWins : styles.playerTwoWins}>{this.props.winner}</Text>
        <Text style={styles.text}>Wins!</Text>

        <TouchableOpacity style={styles.newGameButton} onPress={()=>{this.props.resetGame()}}>
          <Text style={styles.newGame}>Começar nova partida</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
