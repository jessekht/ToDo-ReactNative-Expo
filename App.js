import { SafeAreaView, StyleSheet, Text, StatusBar, Platform } from 'react-native';
import { ThemeProvider } from "styled-components/native";

import { SafeArea } from './src/components/utility/safe-area.component';

import { theme } from "./src/infrastructure/theme";
import { Navigation } from './src/infrastructure/navigation';

import { AuthenticationContextProvider } from "./src/contexts/authentication/authentication.context";

export default function App() {
  return (
    <>
      <ThemeProvider theme={ theme }>
        <SafeArea>
          <AuthenticationContextProvider>
            <Navigation />
          </AuthenticationContextProvider>
        </SafeArea>
      </ThemeProvider>
    </>
  );
}
