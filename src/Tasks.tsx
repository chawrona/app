// import { useState } from 'react';
import { TaskInformation } from './List';
import './styles/Tasks.scss';
import Task from './Task';

function Tasks(props: { data: TaskInformation[] }) {
  return <ul className='tasks'>
        {props.data.map(task => <Task name={task.name} description={task.description} date={task.date}/>)}
    </ul>;
}

export default Tasks;
