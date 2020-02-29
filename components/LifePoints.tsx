import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

const styles = StyleSheet.create({
  lifePointsView: {
    height: "35%",
    width: "100%",
    marginBottom: "5%"
  },
  lifePointsText: {
    fontSize: 100,
    padding: 0,
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    color: "#eac206",
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 5},
    textShadowRadius: 10
  }
});

export class LifePoints extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <View style={styles.lifePointsView}>
        <Text style={styles.lifePointsText}>{this.props.points}</Text>
      </View>
    )
  }
}
