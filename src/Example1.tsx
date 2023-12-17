import {View, Text, StyleSheet,Animated,Easing} from 'react-native';
import React, { useRef } from 'react';

// HERE THE ANIMATION IS COMPLETELY DEPENDENT ON UI THREAD
// HENCE WE CAN EXPECT SMOOTH ANIMATIONS COMPARATIVELY

export default function Example1() {
const translation=useRef(new Animated.Value(0)).current
  React.useEffect(() => {
   Animated.spring(translation,{
	toValue:100,
	easing:Easing.bounce,
	// delay:2000,
	// duration:1000,
	useNativeDriver:true,
	
   }).start()
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          ...styles.square,
          transform: [{translateY: translation}],
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
