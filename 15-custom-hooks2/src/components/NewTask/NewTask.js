import { useState } from 'react';

import Section from '../UI/Section';
import TaskForm from './TaskForm';
import useHttp from "../../hooks/use-http";

const NewTask = (props) => {
  const {isLoading, error, sendRequest: fetchTasks } = useHttp();
    
  const createTask = (taskText, data) => {
        const generatedId = data.name; // firebase-specific => "name" contains generated id
        const createdTask = { id: generatedId, text: taskText };
        props.onAddTask(createdTask);
    };
    
  const enterTaskHandler = async (taskText) => {
      await fetchTasks({
        url: "https://fb-test-96860-default-rtdb.europe-west1.firebasedatabase.app/tasks.json",
        method : "POST",
        headers: {},
        body: { text: taskText },
      }, createTask.bind(null, taskText));
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
