import "./Column.css";
import { JobCard } from "../JobCard/JobCard";
import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";

export const Column = (props) => {
  const Container = styled.div`
    background-color: ${(props) =>
      props.isDraggingOver ? "#eee" : "white"};
  `;
  return (
    <div className="col-container">
      <h3 className="col-title">{props.column.title}</h3>
      <Droppable droppableId={props.column.id}>
        {(provided, snapshot) => (
          <Container
            className="job-list"
            {...provided.droppableProps}
            ref={provided.innerRef}
            isDraggingOver={snapshot.isDraggingOver}
          >
            {props.jobs.map((job, index) => (
              <JobCard
                key={job.id}
                job={job}
                index={index}
                columnId={props.column.id}
                board={props.board}
                setBoard={props.setBoard}
              />
            ))}
            {provided.placeholder}
          </Container>
        )}
      </Droppable>
    </div>
  );
};
