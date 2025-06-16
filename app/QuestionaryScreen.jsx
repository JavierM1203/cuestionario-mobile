import React from "react"
import { Text, View, Button, TouchableOpacity, StyleSheet } from "react-native"

export default function QuestionaryScreen({navigation}) {
    return(
        <View>
            <Text>Welcome to the FoodApp</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Food')}><Text>Start</Text></TouchableOpacity>
        </View>
    )
}