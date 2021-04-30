import React from "react";
import { observer } from "mobx-react-lite";
import PropTypes from 'prop-types';
import {calculateHoursOrDays} from '../utils';

const JobCard = (props) => {
  return (
    <div className={`JobCard  ${props.theme ?"darkJobCard":"lightJobCard"}`}  >
      <img src={props.jobDetails?.company_logo} alt="icon" className="JobCard-Image-icon" /> 
      <div className="margin10">
          <span className="subText">{calculateHoursOrDays(props.jobDetails?.created_at)}</span> 
          <span className="subText">{props.jobDetails?.type}</span> 
      </div>
         <h2 className={`jobTitle ${props.theme ?"whiteColor":"blackColor"}`}>{props.jobDetails?.title}</h2>
         <p className="subText">{props.jobDetails?.company}</p>
         <p className="blueText">{props.jobDetails?.location}</p>
    </div>
  );
};

JobCard.propTypes ={ 
  theme : PropTypes.bool.isRequired,
  jobDetails: PropTypes.object.isRequired
};

export default observer(JobCard);
