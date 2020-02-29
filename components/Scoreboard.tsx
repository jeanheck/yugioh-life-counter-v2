import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { ScoreMarkers } from './ScoreMarkers'
import { ScoreSpecialMarkers } from './ScoreSpecialMarkers'

const styles = StyleSheet.create({
  main: {
    height: "60%"
  }
});

export class Scoreboard extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <View style={styles.main}>
        <ScoreMarkers operation="-" action={this.props.sub} player={this.props.player} />

        <ScoreMarkers operation="+" action={this.props.add} player={this.props.player} />

        <ScoreSpecialMarkers add={this.props.add} sub={this.props.sub} player={this.props.player} />
      </View>
    )
  }
}
