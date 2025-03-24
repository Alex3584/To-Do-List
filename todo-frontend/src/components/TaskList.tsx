import React from "react";
import { List } from "@mui/material";
import TaskItem from "./TaskItem";
import { Task } from "../types/Task";

interface TaskListProps {
  tasks: Task[];
  onEditTask: (task: Task) => void;
  onDeleteTask: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({
  tasks,
  onEditTask,
  onDeleteTask,
}) => {
  return (
    <List>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onEdit={onEditTask}
          onDelete={onDeleteTask}
        />
      ))}
    </List>
  );
};

export default TaskList;
