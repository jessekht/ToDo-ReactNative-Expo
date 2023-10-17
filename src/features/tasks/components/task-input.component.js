import React, { useContext, useEffect, useState } from "react";
import { FontAwesome5 } from "@expo/vector-icons";

import { 
  ComponentContainer,
  InputContainer,
  Input,
  SubmitButton } from "./tasks.styles";

import { TasksContext } from "../../../contexts/task/task.context";
import { AuthenticationContext } from "../../../contexts/authentication/authentication.context";

/**
 * User can add new task. If user edit a task, the plus-symbol button changes into edit-symbol button
 * @returns 
 */
export const TaskInput = () => {
  const [newTodo, setNewTodo] = useState("");
  const [iconSubmit, setIconSubmit] = useState("plus");
  const { user } = useContext(AuthenticationContext);
  const { AddToDo, taskToUpdate } = useContext(TasksContext);

  useEffect(() => {
    if(taskToUpdate.length > 0) {
      setNewTodo(taskToUpdate);
      setIconSubmit("edit"); // edit-symbol button active when there is a task for editing
    }
  }, [taskToUpdate]);

  return (
    <ComponentContainer>
      <InputContainer>
        <Input placeholder="Add Task..." value={newTodo} onChangeText={(v) => setNewTodo(v)} />
      </InputContainer>
      <SubmitButton onPress={() => {
        AddToDo(user, newTodo);
        setNewTodo("");
        setIconSubmit("plus");
      }}>
        <FontAwesome5 name={iconSubmit} size={24} color="midnightblue" />
      </SubmitButton>
    </ComponentContainer>
  );
}

