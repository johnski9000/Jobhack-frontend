import "./JobCard.css";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

export const JobCard = ({ job, index, board, setBoard, columnId }) => {
  const Container = styled.div`
    display: flex;
    background-color: ${(props) => (props.isDragging ? "white" : "white")};
  `;

  const deleteJobcardHandler = () => {
      let newState = { ...board };
      console.log(newState)
      let newJobIds = Array.from(newState.columns[columnId].jobIds);
      
      newJobIds.splice(index, 1);
  
      const newJobs = { ...newState.jobs };
      delete newJobs[job.id];
  
      newState = {
        ...board,
        jobs: {
          ...newJobs,
        },
        columns: {
          ...board.columns,
          [columnId]: {
            ...board.columns[columnId],
            jobIds: newJobIds,
          },
        },
      };

      setBoard(newState)
  }

  return (
    <Draggable draggableId={job.id} index={index}>
      {(provided, snapshot) => (
        <Container
          className="jobcard-container"
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
          isDragging={snapshot.isDragging}
        >
          <div className="jobcard-title">{job.title}</div>
          <div className="jobcard-company">{job.company}</div>
          <button className="jobcard-delete" onClick={deleteJobcardHandler}>x</button>
        </Container>
      )}
    </Draggable>
  );
};
