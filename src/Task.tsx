// import { useState } from 'react';
import { TaskInformation } from './List';
import './styles/Task.scss';
import logo from './images/menu.png';

const daysOfWeek = ['niedz.', 'pon.', 'wt.', 'śr.', 'czw.', 'pt.', 'sob.'];
const months = ['sty', 'lut', 'mar', 'kwi', 'maj', 'cze', 'lip', 'sie', 'wrz', 'paź', 'lis', 'gru'];

const generateDateElement = (date: Date | undefined): JSX.Element | null => {
  if (!date) return null;

  const dayOfWeek = daysOfWeek[date.getDay()];
  const dayOfMonth = date.getDate();
  const month = months[date.getMonth()];

  return <div className="formatedDate">{dayOfWeek} {dayOfMonth} {month}</div>;
};

const generateDescription = (description: string | undefined): JSX.Element | null => {
  if (description) return <p className="description">{description}</p>;
  return null;
};

function Task(props: TaskInformation) {
  return <li className='task'>
        <div className="taskHeader">
          {/* <button></button> */}
          <img src={logo} alt="" />
          <h2>{props.name}</h2>
        </div>
        {generateDescription(props.description)}
        {generateDateElement(props.date)}
    </li>;
}

export default Task;
