import "./Manage.css";
import { DragDropContext } from "react-beautiful-dnd";
import { Column } from "../Column/Column";
import { Navbar } from "../Navbar/Navbar";
import { fetchRequestUpdateBoard } from "../../utils";

export const Manage = ({ board, setBoard, user, logOutHandler }) => {
  const onDragEndHandler = (result) => {
    const { destination, source, draggableId } = result;
    // Cancelled drop
    if (!destination) {
      console.log("no drop destination");
      return;
    }
    // Drop card in the same place?
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      console.log("Card dropped in the same place");
      return;
    }

    const start = board.columns[source.droppableId];
    const finish = board.columns[destination.droppableId];

    // If card drops in the same column
    // Reordering a column
    if (start === finish) {
      const newJobIds = Array.from(start.jobIds);
      newJobIds.splice(source.index, 1);
      newJobIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        jobIds: newJobIds,
      };

      const newState = {
        ...board,
        columns: {
          ...board.columns,
          [newColumn.id]: newColumn,
        },
      };
      console.log("dragend");
      setBoard(newState);
      return;
    }

    // Moving from one column to another.
    const startJobids = Array.from(start.jobIds);
    startJobids.splice(source.index, 1);

    const newStart = {
      ...start,
      jobIds: startJobids,
    };

    const finishedJobIds = Array.from(finish.jobIds);
    finishedJobIds.splice(destination.index, 0, draggableId);

    const newFinish = {
      ...finish,
      jobIds: finishedJobIds,
    };

    const newState = {
      ...board,
      columns: {
        ...board.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };
    console.log("dragend");
    setBoard(newState);
  };

  const saveHandler = () => {
    fetchRequestUpdateBoard(user.username, board);
  };

  return (
    <div className="manage-container">
      <Navbar user={user} logOutHandler={logOutHandler} />
      <h2 className="manage-title">
        Use our Canban Board to keep track of your tasks in the Application
        Process.
      </h2>
      {board && (
        <div className="canban-board">
          <DragDropContext onDragEnd={onDragEndHandler}>
            <div className="canban-container">
              {board.columnOrder.map((columnId) => {
                const column = board.columns[columnId];
                const jobs = column.jobIds.map((jobId) => board.jobs[jobId]);

                return (
                  <Column
                    key={column.id}
                    column={column}
                    jobs={jobs}
                    board={board}
                    setBoard={setBoard}
                  />
                );
              })}
            </div>
          </DragDropContext>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button onClick={saveHandler}>Save</button>
          </div>
        </div>
      )}
    </div>
  );
};
