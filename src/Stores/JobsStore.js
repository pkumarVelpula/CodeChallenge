import { makeAutoObservable } from "mobx";

class JobsStore {
  constructor() {
    makeAutoObservable(this);
  }

  theme = false;

  loadingJobs = false;

  loadingJobDetails = false;

  loadingJobsError = false;

  loadingJobsDetailsError = false;

  jobs = [];

  jobDetails = null;

  setTheme = () => {
    document.body.style = `background: ${this.theme ? "#f1f3f4" : "black"}`;
    this.theme = !this.theme;
  };

  resetStore =()=>{
    this.jobs = [];
  }

  url = "https://jobs.github.com/";

  // `/positions.json?${filterQuery}`,




  getJobs = (filterQuery) => {
    this.resetStore();
    this.loadingJobs = true;
    this.loadingJobsError = false;

    fetch(
      `/cors-proxy/${this.url}/positions.json?${filterQuery}`,
      {
        method: "GET",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    )
      .then((resp) => resp.json())
      .then((resp) => {
        this.jobs = resp;
        this.loadingJobs = false;
      })
      .catch((error) => {
        this.loadingJobsError = true;
        this.loadingJobs = false;
        console.log(error);
      });
  };

  getJobDetails = (id) => {
    this.loadingJobDetails = true;
    this.loadingJobsDetailsError = false;
    fetch(
      `/cors-proxy/${this.url}/positions/${id}.json`,
      {
        method: "GET",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      }
    )
      .then((resp) => resp.json())
      .then((resp) => {
        this.jobDetails = resp;
        this.loadingJobDetails = false;
      })
      .catch((error) => {
        this.loadingJobsDetailsError = true;
        this.loadingJobDetails = false;
        console.log(error);
      });
  };
}

export default new JobsStore();
