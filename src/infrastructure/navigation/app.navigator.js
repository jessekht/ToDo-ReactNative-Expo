import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { LoginScreen } from "../../features/account/screens/login.screen";
import { RegisterScreen } from "../../features/account/screens/register.screen";

const Stack = createStackNavigator();

/**
 * Navigate between the two screens of login and register
 * @returns 
 */
export const AppNavigator = () => {
    return (
        <Stack.Navigator 
            screenOptions={{
                headerShown: false
            }}>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
        </Stack.Navigator>
    )
};