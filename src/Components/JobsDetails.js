import React from "react";
import { observer } from "mobx-react-lite";
import StoreContext from "../Stores/StoreContext";
import { useParams } from "react-router-dom";
import Spinner from "react-bootstrap/Spinner";
import { calculateHoursOrDays } from "../utils";
import parse from "html-react-parser";

function JobsDetails() {
  const { id } = useParams();
  const store = React.useContext(StoreContext);

  React.useEffect(() => {
    store.getJobDetails(id);
  }, []);

  return (
    <div className="Container">
      {store.loadingJobDetails && !store.loadingJobsDetailsError  ? (
        <Spinner animation="border" variant="primary" />
      ) : (
        <>
          {store.jobDetails !== null ? (
            <div >
              <div className="jobTitleCard">
                {store.jobDetails?.company_logo ? (
                  <img
                    src={store.jobDetails?.company_logo}
                    className="mainIcon left ImageContainer"
                    alt="img"
                  />
                ) : (
                  <div className="mainIcon left"></div>
                )}
                <div className="left titleBox">
                <h3 style={{fontSize:"15px"}}>{store.jobDetails?.company}</h3>
                <p style={{color:"#A7ADB6"}}>{store.jobDetails?.company_url}</p>
                </div>
                <a href={store.jobDetails.company_url} target="_blank" className="companyButton">
                  Company Site
                </a>
              </div>

              <div className="jobdetailsContainer">
                <div className="margin10">
                  <span className="subText">
                    {calculateHoursOrDays(store.jobDetails?.created_at)}
                  </span><span className="subText" style={{fontSize:'15px'}}>.</span>
                  <span className="subText">{store.jobDetails?.type}</span>
                </div>
                <div >
                  <div className="applyDetails">
                <h5>{store.jobDetails?.title}</h5>
                <p className="blueText">{store.jobDetails?.location}</p>
                </div>
                <a href={store.jobDetails.company_url} target="_blank" className="applyButton">
                 Apply Now
                </a>
                
                </div>
                <div className="left">{parse(store.jobDetails.description)}</div>
              </div>

              <div className="howToApply"> 
              <h3>How to Apply</h3>
                  <p>{parse(store.jobDetails?.how_to_apply)}</p>
              </div>
            </div>
          ) : (
            <div>No Jobs Details At the moment</div>
          )}
        </>
      )}

      {store.loadingJobsDetailsError ? <p>Something Went wrong</p> : null}
    </div>
  );
}

export default observer(JobsDetails);
