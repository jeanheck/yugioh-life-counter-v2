import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { Scoreboard } from './Scoreboard';
import { GameEnded } from './GameEnded';
import { LifePoints } from './LifePoints';
import { playLifePointsSound, getSpeed, getInterval } from '../utils/GameUtils';

const styles = StyleSheet.create({
  screen: {
    flexDirection: 'row',
    height: "100%"
  },
  board: {
    width:"50%", 
    padding: "2%"
  },
  playerOne: {
    backgroundColor: "#6777f5"
  },
  playerTwo: {
    backgroundColor: "#eb7067"
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    color: "#fff",
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    fontSize: 20
  },
  newGame: {
    position: 'absolute',
    top: 55,
    left: 265,
    width: 60,
    height: 60,
    borderColor: "#ccc",
    borderRadius: 20,
    borderWidth: 1,
    backgroundColor: "rgba(200, 200, 200, 0.3)"
  }
});

export class Main extends Component {
  constructor(props){
    super(props)

    this.state = {
      playerOne: {
        id: 'Player One',
        lifePoints: 8000,
        counters: [ 
          { id: 'a', value: 0 }, 
          { id: 'b', value: 0 },
          { id: 'c', value: 0 }
        ]
      },
      playerTwo: {
        id: 'Player Two',
        lifePoints: 8000,
        counters: [ 
          { id: 'a', value: 0 }, 
          { id: 'b', value: 0 },
          { id: 'c', value: 0 }
        ]
      },
      gameEnded: false,
      winner: undefined
    }

    this.subLifePoints = this.subLifePoints.bind(this)
    this.addLifePoints = this.addLifePoints.bind(this)
    this.checkDuelStatus = this.checkDuelStatus.bind(this)
    this.resetGame = this.resetGame.bind(this)
  }

  subLifePoints(points, player){
    playLifePointsSound();

    let reducer = getInterval(points);
    let counter = points;
    let tempLifePoints = player.lifePoints;

    let myInterval = setInterval(() => {
      counter -= reducer;
      tempLifePoints -= reducer;

      player.lifePoints = Math.round(tempLifePoints);

      if(player.lifePoints < 0){
        player.lifePoints = 0;
        counter = 0;
      }

      this.forceUpdate()

      if(counter === 0){
        clearInterval(myInterval);

        this.checkDuelStatus(player)
      }
    }, getSpeed(points));
  }

  addLifePoints(points, player) {
    playLifePointsSound();

    let adder = getInterval(points);
    let counter = 0;
    let tempLifePoints = player.lifePoints;

    let myInterval = setInterval(() => {
      counter += adder;
      tempLifePoints += adder;

      player.lifePoints = Math.round(tempLifePoints);

      this.forceUpdate()

      if(counter == points){
        clearInterval(myInterval);
      }
    }, getSpeed(points));
  }

  checkDuelStatus(player){
    if(player.lifePoints === 0){
      this.state.gameEnded = true;
      this.state.winner = player.id == 'Player One' ? 'Player Two' : 'Player One';

      this.forceUpdate()
    }
  }

  resetGame(){
    this.state.playerOne.lifePoints = 8000;
    this.state.playerTwo.lifePoints = 8000;
    this.state.gameEnded = false;
    this.state.winner = undefined;

    this.state.playerOne.counters = [ 
      { id: 'a', value: 0 }, 
      { id: 'b', value: 0 },
      { id: 'c', value: 0 }
    ]

    this.state.playerTwo.counters = [ 
      { id: 'a', value: 0 }, 
      { id: 'b', value: 0 },
      { id: 'c', value: 0 }
    ]

    this.forceUpdate();
  }

  render() {
    return (
      <View style={styles.screen}>
        {this.state.gameEnded ? <GameEnded winner={this.state.winner} resetGame={this.resetGame} /> : null}

        <View style={[ styles.board, styles.playerOne ]}>
          <LifePoints points={this.state.playerOne.lifePoints} />

          <Scoreboard player={this.state.playerOne} sub={this.subLifePoints} add={this.addLifePoints} /> 
        </View>

        <View style={[ styles.board, styles.playerTwo ]}>
          <LifePoints points={this.state.playerTwo.lifePoints} />

          <Scoreboard player={this.state.playerTwo} sub={this.subLifePoints} add={this.addLifePoints} />
        </View>

        {!this.state.gameEnded && (
          <TouchableOpacity style={[styles.newGame]} onPress={()=>{this.resetGame()}}>
            <Text style={styles.text}>Novo Jogo</Text>
          </TouchableOpacity>
        )}
      </View>
    )
  }
}
