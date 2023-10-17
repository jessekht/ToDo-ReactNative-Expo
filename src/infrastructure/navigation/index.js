import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AppNavigator } from "./app.navigator";
import { TasksScreen } from "../../features/tasks/screens/tasks.screen";
import { AuthenticationContext } from "../../contexts/authentication/authentication.context";
import { TasksContextProvider } from "../../contexts/task/task.context";

/**
 * Based on the authentication context to decide if a user is valid to access task screen
 * @returns
 */
export const Navigation = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);

  return (
    <NavigationContainer>
      { isAuthenticated ? 
        <TasksContextProvider>
          <TasksScreen />
        </TasksContextProvider> : 
        <AppNavigator /> }
    </NavigationContainer>
  );
};