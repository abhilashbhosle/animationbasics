import {View, Text, StyleSheet, Platform} from 'react-native';
import React from 'react';

export const Logo = ({logo}) => {
  const logoStyle = {
    height: 20,
    width: 20,
    borderRadius: 50,
    shadowRadius: 5,
    shadowColor: logo === 'blue' ? '#22c3e3' : '#e3224f',
    backgroundColor: logo === 'blue' ? '#22c3e3' : '#e3224f',
  };
  return (
    <View style={{flexDirection: 'row'}}>
      <View style={logoStyle}></View>
      <View
        style={{
          ...logoStyle,
          left: -10,
        }}></View>
    </View>
  );
};

export default function Cardstxt({logo}) {
  return (
    <View>
      {/* AMOUNT AND LAYOUT */}
      <View style={styles.amountContainer}>
        <Text style={styles.amount}>$ 5.78</Text>
        <Logo logo={logo} />
      </View>
      <View style={{width: '100%'}}>
        <Text style={styles.cardno}>6543 **** **** 9876</Text>
      </View>
      <View
        style={{
          ...styles.amountContainer,
          marginTop: Platform.OS == 'ios' ? 40 : 30,
        }}>
        <Text style={{...styles.cardno, fontSize: 14}}>John Smith</Text>
        <Text style={{...styles.cardno, fontSize: 14}}>06/26</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  amountContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  amount: {
    fontSize: 26,
    color: '#fff',
    margin: 10,
  },
  cardno: {
    textAlign: 'center',
    fontSize: 16,
    color: '#fff',
    marginTop: 10,
  },
});
