import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ActivityIndicator, StyleSheet, View } from "react-native";
import Tabs from "./src/components/Tabs";
import * as Location from 'expo-location'
import {TEST_KEY} from '@env'

// api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

const App = () => {
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  console.log(TEST_KEY)
  useEffect(() => {
    const requestLocationPermission = async () => {
      try {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
          setError('Permission to access location was denied');
          setLoading(false);
          return;
        }

        let locationData = await Location.getCurrentPositionAsync({});
        setLocation(locationData);
        setLoading(false);
      } catch (error) {
        setError('Error fetching location: ' + error.message);
        setLoading(false);
      }
    };

    requestLocationPermission();
  }, []); // Empty dependency array means this effect runs once after the initial render

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size={'large'} color={'blue'} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text>{error}</Text>
      </View>
    );
  }

  // Rest of your component code

  return (
    <NavigationContainer>
      <Tabs />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1
  }
});

export default App;
