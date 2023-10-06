import React from 'react'
import GlobalStyles from '../../styles/GlobalStyles';
import { SafeAreaView, StyleSheet, Text, FlatList, View } from 'react-native';
import {Feather} from '@expo/vector-icons'

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
const Item = (props) =>{
    const{dt_txt,min,max,condition} = props;
    return(
    <View>
        <Feather name={'sun'} size={50} color ={'white'} ></Feather>
        <Text>{dt_txt}</Text>
        <Text>{min}</Text>
        <Text>{max}</Text>
    </View>
    )
}
const UpcomingWeather = () =>{
    const renderItem = ({item}) => (
        <Item 
        condition={item.weather[0].main} 
        dt_txt = {item.dt_txt} 
        min = {item.main.temp_min} 
        max={item.main.temp_max}>
        </Item>
    )
    return (
        <SafeAreaView style ={GlobalStyles.androidSafeArea}>
            <Text>Upcoming Weather</Text>
            <FlatList 
            data={DATA}
            renderItem={renderItem}>
            </FlatList>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        fles:1,
    }
})

export default UpcomingWeather