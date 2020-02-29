import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  enterTheValueButtons: {
    flexDirection: 'row',
    height: "20%",
  },
  addTypedValue: {
    borderColor: "black",
    borderWidth: 3,
    width:"20%"
  },
  addTypedValueText: {
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    color: "#eac206",
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    fontSize: 25
  },
  subTypedValue: {
    borderColor: "black",
    borderWidth: 3,
    width:"20%"
  },
  subTypedValueText: {
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    color: "#eac206",
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    fontSize: 25
  },
  enterTheValueinput: {
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
    
    action(points, player)
  }

  render() {
    return (
      <View style={styles.enterTheValueButtons}>
        <TouchableOpacity style={styles.addTypedValue} onPress={()=>{this.do(this.props.add, this.state.typedLifePoints, this.props.player)}}>
          <Text style={styles.addTypedValueText}>+</Text>
        </TouchableOpacity>

        <TextInput style={styles.enterTheValueinput} placeholder="Digite aqui um valor" keyboardType="numeric" value={this.state.typedLifePoints} onChangeText={(typedLifePoints) => this.setState({typedLifePoints})} />

        <TouchableOpacity style={styles.subTypedValue} onPress={()=>{this.do(this.props.sub, this.state.typedLifePoints, this.props.player)}}>
          <Text style={styles.subTypedValueText}>-</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
