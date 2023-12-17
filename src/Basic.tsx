import { View, Text,StyleSheet } from 'react-native'
import React, { useEffect } from 'react'

// HERE THE ANIMATION IS COMPLETELY DEPENDENT ON JS THREAD
//IF JS THREAD IS BUSY WITH SOME OTHER COMPLEX OPERATION
//THEN ANIMATION MIGHT NOT BE SMOOTH AND MAY TAKE TIME
export default function Basic() {
  const [transition,setTransition]=React.useState(0)

  useEffect(()=>{
    for (let i = 0; i < 50; i++) {
      setTimeout(() => {
        setTransition(i);
      }, 25 * i);
    }
  },[])
  return (
    <View style={styles.container}>
     <View style={{...styles.square,transform:[{translateX:transition}]}}>
     </View>
    </View>
  )
}
const styles=StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#333',
    justifyContent:'center',
    alignItems:'center'
  },
  square:{
    height:150,
    width:150,
    backgroundColor:'orange'
  }
})