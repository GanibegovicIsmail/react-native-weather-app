import React from 'react';
import {View, Text,SafeAreaView,StyleSheet} from  'react-native'
import GlobalStyles from './GlobalStyles';

const App = () => {
  return (

    <SafeAreaView style ={GlobalStyles.androidSafeArea}>
    <View style = {styles.container}>
      <Text>Current Weather</Text>
    </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    flex:1
  }
})

export default App