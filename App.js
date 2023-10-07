import React from "react";
import {View, StyleSheet} from 'react-native'
import CurrentWeather from "./src/components/screens/CurrentWeather";
import UpcomingWeather from "./src/components/screens/UpcomingWeather";
import City from "./src/components/screens/City";
import { NavigationContainer } from "@react-navigation/native";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()

const App = () =>{
  return (
    <NavigationContainer>
<View style={styles.container}>
  <CurrentWeather></CurrentWeather>
</View>
</NavigationContainer>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})
export default App;