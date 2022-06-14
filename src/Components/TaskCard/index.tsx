import React from 'react';
import { TinyTask } from '../../Models/TinyTaskStore.model';

interface TaskCardProps {
    task: TinyTask;
}

const TaskCard:React.FC<TaskCardProps> = ({task}) => {
  return <div>index</div>;
};

export default TaskCard;
