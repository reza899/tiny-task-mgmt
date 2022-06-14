import React from 'react';
import EmptyBoard from '../../Components/EmptyBoard';
import TaskCard from '../../Components/TaskCard';
import { TinyTask } from '../../Models/TinyTaskStore.model';

interface TaskCardsProps {
  tasks: TinyTask[];
}

const TaskCards: React.FC<TaskCardsProps> = ({ tasks }) => {
  return (
    <>
      {tasks?.length > 0 ? (
        tasks.map((task) => <TaskCard key={task.id} task={task} />)
      ) : (
        <EmptyBoard />
      )}
    </>
  );
};

export default TaskCards;
