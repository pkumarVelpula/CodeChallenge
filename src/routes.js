import React from "react";
import JobsList from "./Components/JobsList";
import JobsDetails from "./Components/JobsDetails";

const routes = [
  {
    id: 0,
    path: "/",
    exact: true,
    component: (props) => (
        <JobsList {...props}/>
    ),
  },
  {
    id: 1,
    path: "/jobdetails/:id?",
    exact: true,
    component: (props) => (
        <JobsDetails {...props}/>
    ),
  },
];

export default routes;
