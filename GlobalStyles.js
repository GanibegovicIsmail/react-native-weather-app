import { StyleSheet, Platform } from "react-native";

export default StyleSheet.create({
    androidSafeArea:{
        flex:1,
        backgroundColor: 'pink',
        paddingTop: Platform.OS === "android" ? 40 : 0
        

    }
})