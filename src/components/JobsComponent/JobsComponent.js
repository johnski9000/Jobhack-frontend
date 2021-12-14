import { Card } from "../Card/Card";
import "./JobComponent.css"

export const JobsComponent = ({ fetchedJobs, board, setBoard }) => (
  <div className="jobs-component">
    {fetchedJobs.map((el, index) => (
      <Card
        key={index}
        index={index}
        title={el.title}
        company={el.company}
        description={el.description}
        salary={el.salary}
        fetchedJobs={fetchedJobs}
        board={board}
        setBoard={setBoard}
      />
    ))}
  </div>
);
