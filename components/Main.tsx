import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Scoreboard } from './Scoreboard';
import { GameEnded } from './GameEnded';
import { LifePoints } from './LifePoints';
import { playLifePointsSound, getSpeed, getInterval } from '../utils/GameUtils';

const styles = StyleSheet.create({
  screen: {
    flexDirection: 'row',
    height: "100%"
  },
  playerOneBoard: {
    backgroundColor: "#6777f5", 
    width:"50%", 
    padding: "2%"
  },
  playerTwoBoard: {
    backgroundColor: "#eb7067",  
    width:"50%", 
    padding: "2%"
  }
});

export class Main extends Component {
  constructor(props){
    super(props)

    this.state = {
      playerOne: {
        id: 'Player One',
        lifePoints: 8000
      },
      playerTwo: {
        id: 'Player Two',
        lifePoints: 8000,
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

    this.forceUpdate()
  }

  render() {
    return (
      <View style={styles.screen}>
        {this.state.gameEnded ? <GameEnded winner={this.state.winner} resetGame={this.resetGame} /> : null}

        <View style={styles.playerOneBoard}>
          <LifePoints points={this.state.playerOne.lifePoints} />

          <Scoreboard player={this.state.playerOne} sub={this.subLifePoints} add={this.addLifePoints} /> 
        </View>

        <View style={styles.playerTwoBoard}>
          <LifePoints points={this.state.playerTwo.lifePoints} />

          <Scoreboard player={this.state.playerTwo} sub={this.subLifePoints} add={this.addLifePoints} />
        </View>
      </View>
    )
  }
}
