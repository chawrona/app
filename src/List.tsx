// import { useState } from 'react';
import './styles/List.scss';
import AddTask from './AddTask';
import Tasks from './Tasks';

export interface TaskInformation {
  name: string;
  description?: string;
  date?: Date;
}

const tasks: TaskInformation[] = [
  { name: 'Zadanie', date: new Date() },
  { name: 'Zadanie', description: 'Clean up the trash by picking up litter and disposing of it properly. This task involves removing debris, organizing waste, and maintaining cleanliness in the designated area.', date: new Date() },
  { name: 'Zadanie', description: 'Opis' }
];

function List(props: { listName: string }) {
  return <div className="list">
        <h1>{props.listName}</h1>
        <Tasks data={tasks}/>
        <AddTask/>
    </div>;

}

export default List;
