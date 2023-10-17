import { FlatList } from "react-native";
import { Button } from "react-native-paper";
import styled from "styled-components/native";

import { SafeArea } from "../../../components/utility/safe-area.component";

/** Styles for Task-related components and screens */

export const TaskList = styled(FlatList).attrs({
    contentContainerStyle: {
        padding: 10,
    },
})``;

export const MainContainer = styled(SafeArea)`
    background-color: #191970;
    padding: 5px;
    align-items: center;
`;

export const UserContainer = styled.View`
    background-color: whitesmoke;
    height: auto;
    width: 100%;
    margin-bottom: 10px;
    flex-direction: row;
    justify-content: space-between;
`;

export const UserIcon = styled.View`
    align-items: center;
    justify-content: center;
    margin-left: 10px;
`;

export const UserInfo = styled.Text`
    font-size: 20px;
    text-align: left;
    width: 50%;
    padding-top: 10px;
`;

export const LogOutButton = styled(Button).attrs({
    contentStyle: { flexDirection: 'row-reverse' }
})`
    padding: 5px;
    width: 33%;
    border-radius: 0;
`;

/** Task-Info-Card Component */
export const TaskContainer = styled.View`
    background-color: whitesmoke;
    height: auto;
    width: 97%;
    margin-bottom: 10px;
    flex-direction: row;
    justify-content: space-between;
`;

export const ItemContainer = styled.View`
    width: 70%;
    height: auto;
`;

export const TextItem = styled.Text`
    color: black;    
    font-size: 22px;
    padding: 6px;
`;

export const IconContainer = styled.TouchableOpacity`
    align-items: center;
    justify-content: center;
    padding: 6px;
    height: auto;
`;

export const CircleContainer = styled.View`
    align-items: center;
    justify-content: center;
    margin-left: 10px;
`;

/** Task-Input Component */
export const ComponentContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 98%;
  margin-bottom: 10px;
  padding-left: 5px;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  width: 83%;
  border-radius: 10px;
  border: 1px solid green;
`;

export const Input = styled.TextInput`
  font-size: 20px;
  background-color: whitesmoke;
  width: 100%;
  padding: 10px;
  border-radius: 10px;
`;

export const SubmitButton = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  background-color: whitesmoke;
  border-radius: 50px;
  margin-right: 5px;
`;