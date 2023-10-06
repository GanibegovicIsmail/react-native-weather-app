import React from 'react'
import GlobalStyles from '../../styles/GlobalStyles';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

const UpcomingWeather = () =>{
    return (
        <SafeAreaView style ={GlobalStyles.androidSafeArea}>
            <Text>Upcoming Weather</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        fles:1,
    }
})

export default UpcomingWeather