import React, { useState, useContext, createContext, useEffect } from "react";

import { FIREBASE_DB } from "../../../firebase.config";
import { AuthenticationContext } from "../authentication/authentication.context";

export const TasksContext = createContext();

/**
 * Context set up for handling all task-related actions like CRUD
 * @returns 
 */
export const TasksContextProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);
    const [taskToUpdate, setTaskToUpdate] = useState("");
    const { user } = useContext(AuthenticationContext);

    const AddToDo = (user, newTodo) => {
        if( !user || !newTodo ) {
            return;
        }
        if(taskToUpdate.length <= 0) {
            // if user wants to add a single new task
            let newTasks = [...tasks, newTodo];
            setTasks(newTasks);
            FIREBASE_DB.collection('TaskList').doc(user.user.uid).set({
                tasks: newTasks
            });
        } else {
            // if user wants to edit a single existing task
            let otherTasks = [...tasks];
            otherTasks.splice(otherTasks.indexOf(taskToUpdate), 1, newTodo);
            setTasks(otherTasks);
            setTaskToUpdate("");
            FIREBASE_DB.collection('TaskList').doc(user.user.uid).set({
                tasks: otherTasks
            });
        }
    }

    const EditTask = (task) => {
        setTaskToUpdate(task);
    }

    const DeleteTask = (task) => {
        // if user wants to delete a single task
        let otherTasks = [...tasks];
        otherTasks.splice(otherTasks.indexOf(task), 1);
        setTasks(otherTasks);
        FIREBASE_DB.collection('TaskList').doc(user.user.uid).set({
            tasks: otherTasks
        });
    }

    const retrieveTasks = (user) => {
        // fetch all tasks by a user
        if( !user ) {
            return;
        }
        setTasks([]);

        FIREBASE_DB.collection('TaskList').doc(user.user.uid).get()
            .then((snapshot) => {
                setTasks(snapshot.data()['tasks']);
            });
    };

    useEffect(() => {
        if( user ) {
            retrieveTasks( user );
        }        
    }, []);

    return (
        <TasksContext.Provider
            value={{
                tasks,
                AddToDo,
                DeleteTask,
                EditTask,
                taskToUpdate
            }}>
            {children}
        </TasksContext.Provider>
    );
};