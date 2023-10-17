import styled from "styled-components/native";
import { Button, TextInput } from "react-native-paper";

/** Styles set up for login & register screens */

export const ScreenContainer = styled.View`
    flex: 1;
    background-color: #191970;
    padding: 10px;
    align-items: center;
    justify-content: center;
`;

export const GroupContainer = styled.View`
    background-color: rgba(255, 255, 255, 0.7);
    padding: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const ButtonIconLeft = styled(Button)`
    padding: 10px;
    width: 200px;
    align-self: center;
`;

export const ButtonIconRight = styled(Button).attrs({
    contentStyle: { flexDirection: 'row-reverse' }
})`
    padding: 10px;
    width: 200px;
    align-self: center;
`;
  
export const AuthInput = styled(TextInput)`
    width: 300px;
    margin-bottom: 10px;
`;
  
export const Heading = styled.Text`
    font-size: 30px;
    text-align: center;
`;

export const Subheading = styled.Text`
    font-size: 15px;
    text-align: center;
`;
  
export const ErrorContainer = styled.View`
    max-width: 300px;
    align-items: center;
    align-self: center;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const ErrorText = styled.Text`
    font-size: 15px;
    text-align: center;
    color: #E55451;
`;