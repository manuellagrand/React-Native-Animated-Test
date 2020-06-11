import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  PanResponder,
  Animated,
  Dimensions,
} from 'react-native';

export default class Draggable extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pan: new Animated.ValueXY(),
    };

    this.panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([
        null,
        {
          dx: this.state.pan.x,
          dy: this.state.pan.y,
        },
      ]),
      onPanResponderRelease: (e, gesture) => {
        Animated.spring(this.state.pan, {
          toValue: { x: 0, y: 0 },
          speed: 1,
          bounciness: 4,
        }).start();
      },
    });
  }
  render() {
    return <View>{this.MakeDraggable()}</View>;
  }

  MakeDraggable() {
    return (
      <View>
        <Animated.View
          {...this.panResponder.panHandlers}
          style={[this.state.pan.getLayout(), styles.square]}></Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  square: {
    width: 50,
    height: 50,
    borderRadius: 15,
    backgroundColor: '#006666',
  },
});
