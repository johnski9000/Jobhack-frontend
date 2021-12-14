import { useState } from "react";
import { jobModel } from "../../jobModel";
import { JobsComponent } from "../JobsComponent/JobsComponent";
import { Navbar } from "../Navbar/Navbar";
import "./Find.css";

export const Find = ({ board, setBoard, user, logOutHandler }) => {
  const [jobName, setJobName] = useState("");
  const [location, setLocation] = useState("");
  const [fetchedJobs, setFetchedJobs] = useState([]);

  const fetchURL = async () => {
    if (jobName === "" || Location === "") {
      alert("Please enter your search criteria.")
    }
    setFetchedJobs([]);
    const data = await fetch(
      `https://api.adzuna.com/v1/api/jobs/gb/search/1?app_id=14758e80&app_key=b7bdf1e68baa9af01ec4a64dbfe8d2b3&where=${location}&what=${jobName}&results_per_page=18`
    );
    const response = await data.json();
    let fetchedJobsArray = [];
    console.log(response);
    for (let i = 0; i < response.results.length; i++) {
      const companyName = response.results[i].company.display_name;
      const jobTitle = response.results[i].title;
      const description = response.results[i].description;
      const salary = response.results[i].salary_min;

      const fetchedJob = new jobModel(
        jobTitle,
        companyName,
        description,
        salary
      );

      fetchedJobsArray.push(fetchedJob);
    }
    console.log(fetchedJobsArray);
    setFetchedJobs(fetchedJobsArray);
  };

  return (
    <div className="find-container">
      <Navbar user={user} logOutHandler={logOutHandler} />
      <div className="find-title-container">
        <h2 className="find-title">
          Use our handy tool to search for developer jobs here..
        </h2>
        <p className="find-desc">
          Adding items to your list will create a card on the canban board on
          the manage page so that you can track your progress!
        </p>
      </div>
      <div className="search-criteria">
        <input
          className="left-input input"
          onChange={(e) => setJobName(e.target.value)}
          type="text"
          placeholder="Job Name"
        ></input>
        <input
          className="right-input input"
          onChange={(e) => setLocation(e.target.value)}
          type="text"
          placeholder="Location"
        ></input>
        <button className="job-search-button button" onClick={fetchURL}>
          Search
        </button>
      </div>
      {fetchedJobs.length > 1 ? (
        <div style={{ display: "block" }}>
          <JobsComponent
            fetchedJobs={fetchedJobs}
            board={board}
            setBoard={setBoard}
          />
        </div>
      ) : (
        <div className="find-search-text">
          Jobs suited for your search will appear here...
        </div>
      )}
    </div>
  );
};
