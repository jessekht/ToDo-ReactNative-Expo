import React, { useState, useContext } from "react";
import { ActivityIndicator } from "react-native-paper";

import {
    ScreenContainer,
    GroupContainer,
    ButtonIconLeft,
    AuthInput,
    ErrorContainer,
    Heading,
    Subheading,
    ErrorText
} from "../components/account.styles";

import { AuthenticationContext } from "../../../contexts/authentication/authentication.context";

/**
 * Screen for creating a new user
 */
export const RegisterScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatedPassword, setRepeatedPassword] = useState("");
    const { onRegister, isLoading, error } = useContext(AuthenticationContext);
  
    return (
        <ScreenContainer>
            <GroupContainer>
                <Heading>REGISTER</Heading>
                <Subheading>All fields are required</Subheading>
                <GroupContainer>
                    <AuthInput
                        label="E-mail"
                        value={email}
                        textContentType="emailAddress"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        onChangeText={(e) => setEmail(e)}
                    />
                    <AuthInput
                        label="Password"
                        value={password}
                        textContentType="password"
                        secureTextEntry
                        autoCapitalize="none"
                        onChangeText={(p) => setPassword(p)}
                    />
                    <AuthInput
                        label="Repeat Password"
                        value={repeatedPassword}
                        textContentType="password"
                        secureTextEntry
                        autoCapitalize="none"
                        onChangeText={(p) => setRepeatedPassword(p)}
                    />

                    {error && (
                        <ErrorContainer>
                            <ErrorText>{ error }</ErrorText>
                        </ErrorContainer>
                    )}
                    {!isLoading ? (
                        <ButtonIconLeft
                            icon="email-outline"
                            mode="contained"
                            uppercase="true"
                            onPress={() => onRegister(email, password, repeatedPassword)}
                        >
                            Register
                        </ButtonIconLeft>
                    ) : (
                        <ActivityIndicator animating={true} color="#FF0000" />
                    )}                    
                </GroupContainer>
                <ButtonIconLeft 
                    icon="arrow-left"
                    mode="contained" 
                    onPress={() => navigation.goBack()}>Back To Login</ButtonIconLeft>
            </GroupContainer>
        </ScreenContainer>
    );
};