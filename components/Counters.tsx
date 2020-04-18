import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

const styles = StyleSheet.create({
  counters: {
    flexDirection: 'row',
    height: "15%",
    marginBottom: "5%",
    marginTop: "3%"
  },
  counter: {
    flexDirection: 'row',
    width: 90,
    marginLeft: "1%"
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
    fontStyle: "italic",
    color: "#eac206",
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -1, height: 1},
    textShadowRadius: 10,
    fontSize: 20
  },
  button: {
    borderColor: "#ccc",
    borderWidth: 3,
    borderRadius: 20
  },
  subButton: {
    width: 30,
    marginRight: "2%"
  },
  addButton: {
    flexDirection: 'row',
    paddingLeft: "8%",
    width: 50
  }
});

export class Counters extends Component {
  constructor(props){
    super(props)
  }

  do(id, action){
    let counter = this.getCounter(id);
    action(counter);

    this.forceUpdate();
  }

  add(counter){
    counter.value += 1;
  }
  sub(counter){
    counter.value -= 1;
  }

  getCounter(id){
    return this.props.player.counters.find(counter => counter.id === id);
  }

  render() {
    return (
      <View style={styles.counters}>
        <View style={styles.counter}>
          <TouchableOpacity style={[styles.button, styles.subButton]} onPress={()=>{this.do('a', this.sub)}}>
            <Text style={styles.text}>-</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.addButton]} onPress={()=>{this.do('a', this.add)}}>
            <Text style={styles.text}>A:</Text>
            <Text style={styles.text}>{ this.getCounter('a').value }</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.counter}>
          <TouchableOpacity style={[styles.button, styles.subButton]} onPress={()=>{this.do('b', this.sub)}}>
            <Text style={styles.text}>-</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.addButton]} onPress={()=>{this.do('b', this.add)}}>
            <Text style={styles.text}>B:</Text>
            <Text style={styles.text}>{ this.getCounter('b').value }</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.counter}>
          <TouchableOpacity style={[styles.button, styles.subButton]} onPress={()=>{this.do('c', this.sub)}}>
            <Text style={styles.text}>-</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.addButton]} onPress={()=>{this.do('c', this.add)}}>
            <Text style={styles.text}>C:</Text>
            <Text style={styles.text}>{ this.getCounter('c').value }</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
