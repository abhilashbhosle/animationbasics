import {
  View,
  Text,
  StatusBar,
  StyleSheet,
  ScrollView,
  Dimensions,
  Animated,
  Platform,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useState} from 'react';
import Cardstxt from './Cardstxt';

export default function Example4() {
  StatusBar.setBarStyle('light-content', true);
  const firstOpacity = useRef(new Animated.Value(0)).current;
  const secondOpacity = useRef(new Animated.Value(0)).current;
  const thirdOpacity = useRef(new Animated.Value(0)).current;
  const [viewCards, setViewCards] = useState(false);
  const {width, height} = Dimensions.get('screen');
  const cardStyles = {
    height: height / 4.5,
    width: width - 50,
    borderRadius: 14,
    position: 'absolute',
    zIndex: 100,
    left: 7,
    padding: 20,
  };
  const backCardStyle = {
    position: 'relative',
    width: width - 35,
    height: height / 4.4,
    borderRadius: 14,
    opacity: 0.3,
    zIndex: -1,
    top: 5,
  };
  React.useEffect(() => {
    Animated.stagger(1000, [
      Animated.timing(firstOpacity, {
        toValue: 1,
        useNativeDriver: true,
      }),
      Animated.timing(secondOpacity, {
        toValue: 1,
        useNativeDriver: true,
      }),
      Animated.timing(thirdOpacity, {
        toValue: 1,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);
  return (
    <ScrollView style={styles.container}>
      <View
        style={{
          ...styles.subContainer,
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: Platform.OS == 'ios' ? 80 : 10,
          flex: 1,
        }}>
        <Text style={{color: '#fff', fontSize: 20, fontWeight: '500'}}>
          Cards Manager
        </Text>
        {/* CARD 1 */}
        <Animated.View style={{marginTop: 25, opacity: firstOpacity}}>
          <View style={{...backCardStyle, backgroundColor: '#e3224f'}}></View>
          <View
            style={{
              ...cardStyles,
              backgroundColor: '#e3224f',
            }}>
            <Cardstxt logo="blue" />
          </View>
        </Animated.View>
        {/* CARD 2 */}
        <Animated.View style={{marginTop: 25, opacity: secondOpacity}}>
          <View style={{...backCardStyle, backgroundColor: '#22c3e3'}}></View>
          <View
            style={{
              ...cardStyles,
              backgroundColor: '#22c3e3',
            }}>
            <Cardstxt logo="pink" />
          </View>
        </Animated.View>
        {/* CARD 3 */}
        <Animated.View style={{marginTop: 25, opacity: thirdOpacity}}>
          <View style={{...backCardStyle, backgroundColor: '#e89715'}}></View>
          <View
            style={{
              ...cardStyles,
              backgroundColor: '#e89715',
            }}>
            <Cardstxt logo="blue" />
          </View>
        </Animated.View>
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#222',
    flex: 1,
  },
  subContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  viewbtn: {
    height: 40,
    width: 150,
    backgroundColor: '#e3224f',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
