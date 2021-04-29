import React from "react";
import { observer } from "mobx-react-lite";
import StoreContext from "../Stores/StoreContext";
import { Link } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import JobCard from "./JobCard";
import Filter from "./Filter";

const JobsList = () => {
  const store = React.useContext(StoreContext);

  React.useEffect(() => {
    store.getJobs();
  }, []);

  {
    console.log(store.loadingJobs);
  }
  return (
    <div className="Container">
      <Filter />

      {store.loadingJobs ? (
        <Spinner animation="border" variant="primary" />
      ) : null}

      {store.jobs.length ? (
        <div>
          {store.jobs.map((each) => (
            <Link to={`/jobdetails/${each.id}`} key={each.id}>
              <JobCard theme={store.theme} jobDetails={each} key={each.id} />
            </Link>
          ))}
        </div>
      ) : null}

      {!store.jobs.length && !store.loadingJobsError && !store.loadingJobs ? (
        <p className="message">No Jobs At the moment</p>
      ) : null}

      {store.loadingJobsError ? <p className="errorMesage">Something Went wrong!</p> : null}
    </div>
  );
};

export default observer(JobsList);
