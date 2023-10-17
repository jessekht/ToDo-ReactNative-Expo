import React, { useContext } from "react";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";

import { 
    TaskContainer,
    ItemContainer,
    TextItem,
    IconContainer,
    CircleContainer } from "./tasks.styles";

import { TasksContext } from "../../../contexts/task/task.context";

/**
 * Display task info. There are two buttons to press for editting and deleting a single task
 */
export const TaskInfoCard = ({ task }) => {
    const { DeleteTask, EditTask } = useContext(TasksContext);    

    return (
        <TaskContainer>
            <CircleContainer>
                <FontAwesome name="circle" size={13} color="midnightblue" />
            </CircleContainer>
            <ItemContainer>
                <TextItem>{ task }</TextItem>
            </ItemContainer>
            <IconContainer onPress={() => EditTask(task)}>
                <FontAwesome5 name="edit" size={20} color="midnightblue" />
            </IconContainer>
            <IconContainer onPress={() => DeleteTask(task)}>
                <FontAwesome5 name="trash" size={20} color="midnightblue" />
            </IconContainer>
        </TaskContainer>
    )
}