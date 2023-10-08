import React from 'react'
import GlobalStyles from '../../../styles/GlobalStyles';
import { SafeAreaView, StyleSheet, Text, FlatList, View, StatusBar, ImageBackground} from 'react-native';
import {Feather} from '@expo/vector-icons'
import ListItem from '../ListItem';

const DATA= [
    {
        dt_txt: "2023-02-18 12:00:00",
        main: {
            temp_max: 8.55,
            temp_min: 7.55
        },
        weather: [{
            main: 'Clear'
        }]
    },
    {
        dt_txt: "2023-02-18 15:00:00",
        main: {
            temp_max: 8.55,
            temp_min: 7.55
        },
        weather: [{
            main: 'Clouds'
        }]
    },
    {
        dt_txt: "2023-02-18 18:00:00",
        main: {
            temp_max: 8.55,
            temp_min: 7.55
        },
        weather: [{
            main: 'Rain'
        }]
    }
]
const UpcomingWeather = () =>{
    const renderItem = ({item}) => (
        <ListItem 
        condition={item.weather[0].main} 
        dt_txt = {item.dt_txt} 
        min = {item.main.temp_min} 
        max={item.main.temp_max}>
        </ListItem>
    )
    const {container, image} = styles
    return (
        <SafeAreaView style ={styles.safeContainer}>
              <ImageBackground source={require('../../../assets/upcoming-background.jpg')} style={image}>
            <View style ={container}>
            <Text>Upcoming Weather</Text>
            <FlatList 
            data={DATA}
            renderItem={renderItem}
            keyExtractor={(item) => item.dt_txt}
            />
            </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    safeContainer:{
        flex:1,
        backgroundColor: 'royalblue',
    },
    container:{
        flex:1,
        marginTop:StatusBar.currentHeight || 0,
    },
    image:{
        flex:1
    }
})

export default UpcomingWeather