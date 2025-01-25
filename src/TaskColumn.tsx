// src/TaskColumn.tsx
import type { FC } from "react";
import { TaskAddButton } from "./TaskAddButton";
import styles from "./TaskColumn.module.css";
import { TaskItem } from "./TaskItem";
import type { TaskStatus } from "./types";
import { filteredTasks, useTasks } from "./taskStore";

interface Props {
  status: TaskStatus;
}

export const TaskColumn: FC<Props> = ({ status }) => {
    // TODO

    const snapshot = useTasks();
    const tasks = filteredTasks(status, snapshot);
    return (
        <div className={styles.wrapper}>
        <h2 className={styles.heading}>{status}</h2>
        <ul className={styles.list}>
            {tasks.map((task) => (
            <TaskItem key={task.id} task={task} />
            ))}
        </ul>
        <TaskAddButton status={status} />
        </div>
    );
};