import React from "react";
import { 
    ColumnWrapper,
    ColumnHeader,
    ColumnTitle,
    CardsList,
    AddButtonArea,
    AddButton,
} from "./styles";

import CardTask from "../CardTask";

const KanbanColumn = ({ title, icon, accentColor, tasks }) => {
    return (
    <ColumnWrapper>
        <ColumnHeader>
        <ColumnTitle>
            <span className="icon">{icon}</span>
            <span className="text">{title}</span>
        </ColumnTitle>
        </ColumnHeader>

        <CardsList>
        {tasks.map((task, index) => (
            <CardTask
            key={index}
            statusColor={accentColor}
            title={task.title}
            subtitle={task.subtitle}
            members={task.members}
            date={task.date}
            />
        ))}
        </CardsList>

        <AddButtonArea>
        <AddButton>+</AddButton>
        </AddButtonArea>
    </ColumnWrapper>
    );
};

export default KanbanColumn;
