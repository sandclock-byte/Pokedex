import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from '../screens/HomeScreen';
import { PokemonScreen } from '../screens/PokemonScreen';

const Stack = createNativeStackNavigator();

export const Navigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='HomeScreen' component={HomeScreen} />
                <Stack.Screen name='PokemonScreen' component={PokemonScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


const styles = StyleSheet.create({

});