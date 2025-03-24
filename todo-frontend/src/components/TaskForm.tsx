import React, { FormEvent, useEffect, useState } from "react";
import {
  Button,
  TextField,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
} from "@mui/material";
import { Task } from "../types/Task";

interface TaskFormProps {
  editingTask: Task | null;
  onSave: (taskData: Omit<Task, "id">) => void;
  onUpdate: (updatedTask: Task) => void;
  onCancelEdit?: () => void;
}

const TaskForm: React.FC<TaskFormProps> = ({
  editingTask,
  onSave,
  onUpdate,
  onCancelEdit,
}) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [status, setStatus] = useState("pending");

  useEffect(() => {
    if (editingTask) {
      setTitle(editingTask.title);
      setDescription(editingTask.description);
      setStatus(editingTask.status);
    } else {
      setTitle("");
      setDescription("");
      setStatus("pending");
    }
  }, [editingTask]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!title.trim()) return;

    if (editingTask) {
      onUpdate({
        ...editingTask,
        title,
        description,
        status,
      });
    } else {
      onSave({
        title,
        description,
        status,
      });
    }

    setTitle("");
    setDescription("");
    setStatus("pending");
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{ display: "flex", flexDirection: "column", gap: 2, mb: 3 }}
    >
      <TextField
        label="Заголовок"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <TextField
        label="Опис"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <FormControl fullWidth>
        <InputLabel id="status-label">Статус</InputLabel>
        <Select
          labelId="status-label"
          label="Статус"
          value={status}
          onChange={(e) => setStatus(e.target.value as string)}
        >
          <MenuItem value="pending">pending</MenuItem>
          <MenuItem value="in progress">in progress</MenuItem>
          <MenuItem value="completed">completed</MenuItem>
        </Select>
        <FormHelperText>
          Наприклад: "pending", "in progress", "completed"
        </FormHelperText>
      </FormControl>

      <Box display="flex" justifyContent="flex-start" gap={2}>
        <Button variant="contained" type="submit">
          {editingTask ? "Обновити" : "Додати"}
        </Button>
        {editingTask && onCancelEdit && (
          <Button variant="outlined" color="inherit" onClick={onCancelEdit}>
            Відміна
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default TaskForm;
