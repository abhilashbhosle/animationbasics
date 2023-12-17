import {View, Text, StyleSheet, Animated, Easing} from 'react-native';
import React, {useRef} from 'react';

// ADDING SEQUENCE TO THE ANIMATIONS

export default function Example2() {
  const translation = useRef(new Animated.ValueXY({x: 0, y: 0})).current;
  React.useEffect(() => {
    Animated.sequence([
      Animated.spring(translation.x, {
        toValue: -100,
        useNativeDriver: true,
      }),
      Animated.spring(translation.y, {
        toValue: -100,
        useNativeDriver: true,
      }),
	  Animated.spring(translation.x, {
        toValue: 100,
        useNativeDriver: true,
      }),
	  Animated.spring(translation.y, {
        toValue: 100,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.square,
          transform: [{translateX: translation.x}, {translateY: translation.y}],
        }}></Animated.View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  square: {
    height: 150,
    width: 150,
    backgroundColor: 'orange',
  },
});
