import React from "react";
import CurrentWeather from "./src/components/screens/CurrentWeather";
import UpcomingWeather from "./src/components/screens/UpcomingWeather";
import City from "./src/components/screens/City";
import { NavigationContainer } from "@react-navigation/native";
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'

const Tab = createBottomTabNavigator()

const App = () =>{
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name={'Current'} component={CurrentWeather}/>
        <Tab.Screen name={'Upcoming'} component={UpcomingWeather}/>
        <Tab.Screen name={'City'} component={City}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}
export default App;