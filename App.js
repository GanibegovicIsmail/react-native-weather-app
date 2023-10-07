import React from "react";
import {View, StyleSheet} from 'react-native'
import CurrentWeather from "./src/components/screens/CurrentWeather";
import UpcomingWeather from "./src/components/screens/UpcomingWeather";
const App = () =>{
  return (
<View style={styles.container}>
  <UpcomingWeather></UpcomingWeather>
</View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})
export default App;