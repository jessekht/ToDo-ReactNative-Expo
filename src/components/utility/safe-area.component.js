import { StatusBar, SafeAreaView } from "react-native";
import styled from "styled-components/native";

// set up safe area to work on android
export const SafeArea = styled(SafeAreaView)`
  flex: 1;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;