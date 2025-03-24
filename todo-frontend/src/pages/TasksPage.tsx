import React, { useState } from "react";
import { Container, Typography } from "@mui/material";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import { Task } from "../types/Task";

function TasksPage() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Выучить TypeScript",
      description: "Пройти базовый гайд",
      status: "pending",
    },
    {
      id: 2,
      title: "Сделать To-Do на React",
      description: "Взять за основу Vite + TS",
      status: "in progress",
    },
  ]);

  const [editingTask, setEditingTask] = useState<Task | null>(null);

  const handleSave = (taskData: Omit<Task, "id">) => {
    const newTask: Task = {
      id: Date.now(),
      ...taskData,
    };
    setTasks([...tasks, newTask]);
  };

  const handleUpdate = (updatedTask: Task) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === updatedTask.id ? updatedTask : t))
    );
    setEditingTask(null);
  };

  const handleDeleteTask = (id: number) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  };

  const handleEditTask = (task: Task) => {
    setEditingTask(task);
  };

  const handleCancelEdit = () => {
    setEditingTask(null);
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Список завдань
      </Typography>

      <TaskForm
        editingTask={editingTask}
        onSave={handleSave}
        onUpdate={handleUpdate}
        onCancelEdit={handleCancelEdit}
      />

      <TaskList
        tasks={tasks}
        onEditTask={handleEditTask}
        onDeleteTask={handleDeleteTask}
      />
    </Container>
  );
}

export default TasksPage;
