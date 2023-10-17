import React, { useState, useContext } from "react";
import { ActivityIndicator, Colors } from "react-native-paper";

import {
    ScreenContainer,
    GroupContainer,
    ButtonIconLeft,
    ButtonIconRight,
    AuthInput,
    ErrorContainer,
    Heading,
    Subheading,
    ErrorText
} from "../components/account.styles";

import { AuthenticationContext } from "../../../contexts/authentication/authentication.context";

/**
 * Screen for an existing user to log in
 */
export const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { onLogin, error, isLoading } = useContext(AuthenticationContext);
  
    return (
        <ScreenContainer>
            <GroupContainer>
                <Heading>LOGIN</Heading>
                <Subheading>Please login to continue</Subheading>
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
                    {error && (
                        <ErrorContainer>
                            <ErrorText>{ error }</ErrorText>
                        </ErrorContainer>
                    )}
                    {!isLoading ? (
                        <ButtonIconLeft
                            icon="lock-open-outline"
                            mode="contained"
                            uppercase="true"
                            onPress={() => onLogin(email, password)}
                        >
                            Login
                        </ButtonIconLeft>
                    ) : (
                        <ActivityIndicator animating={true} color="#FF0000" />
                    )}                    
                </GroupContainer>
                <ButtonIconRight 
                    icon="arrow-right"
                    mode="contained" 
                    onPress={() => navigation.navigate("Register")}>Create New Profile</ButtonIconRight>
            </GroupContainer>
        </ScreenContainer>
    );
};