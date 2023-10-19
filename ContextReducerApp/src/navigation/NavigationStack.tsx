import { createStackNavigator } from "@react-navigation/stack";

import React from 'react'
import { HomeScreen } from "../screens/HomeScreen";
import { DetailScreen } from "../screens/DetailScreen";

const Stack = createStackNavigator();

export const NavigationStack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="HomeScreen" options={{ title: 'Home' }} component={HomeScreen} />
            <Stack.Screen name="DetailScreen" options={{ title: 'Detail' }} component={DetailScreen} />
        </Stack.Navigator>
    );
}