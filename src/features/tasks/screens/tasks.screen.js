import React, { useContext, useEffect, useState } from "react";

import { FontAwesome } from "@expo/vector-icons";

import { 
    TaskList,
    MainContainer,
    UserContainer,
    UserIcon,
    UserInfo,
    LogOutButton } from "../components/tasks.styles"; 

import { TaskInput } from "../components/task-input.component";
import { TaskInfoCard } from "../components/task-info-card.component";

import { AuthenticationContext } from "../../../contexts/authentication/authentication.context";
import { TasksContext } from "../../../contexts/task/task.context";

/**
 * The main screen of the app: the top showing user info and logout, the middle showing list of tasks, and the bottom showing 
 * function to add / edit a task
 * @returns 
 */
export const TasksScreen = () => {
    const { onLogout, user } = useContext(AuthenticationContext);
    const { tasks } = useContext(TasksContext);
    
    return (
        <MainContainer>
            <UserContainer>
                <UserIcon>
                    <FontAwesome name="user" size={24} color="midnightblue" />
                </UserIcon>
                <UserInfo>{user.user.email}</UserInfo>
                <LogOutButton
                    icon="arrow-right"
                    mode="contained"
                    uppercase="true"
                    onPress={() => onLogout()}
                >Logout</LogOutButton>
            </UserContainer>
            <TaskList
                data={tasks}
                renderItem={({ item }) => {
                    return (
                        <TaskInfoCard task={item} />
                    );
                }}
                keyExtractor={(item) => item}
            />
            <TaskInput />
        </MainContainer>
    );
};