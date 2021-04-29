import React from "react";
import { Navbar, Form, FormControl, Button, InputGroup } from "react-bootstrap";
import StoreContext from "../Stores/StoreContext";
import { BsSearch } from "react-icons/bs";
import { MdPlace } from "react-icons/md";

const defaultState = {
  description: "",
  full_time: false,
  location: "",
};

function Filter() {
  const store = React.useContext(StoreContext);
  const [state, setState] = React.useState(defaultState);

  const handleChange = (event, eventType) => {
    setState({
      ...state,
      [eventType]:
        eventType === "full_time" ? event.target.checked : event.target.value,
    });
  };

  const handleSearch = () => {
    let esc = encodeURIComponent;
    const query = Object.keys(state)
      .map((each) => esc(each) + "=" + esc(state[each]))
      .join("&");
    store.getJobs(query);
  };

  return (
    <div className="filterContainer">
      <Navbar>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <InputGroup className="mb-2 borderRight" >
            <InputGroup.Text className="inputPrepend" >
              <BsSearch className="filtericonStyle"/>
            </InputGroup.Text>
            <FormControl
              placeholder="Filter By title, Companies,expertise"
              onChange={(e) => {
                handleChange(e, "description");
              }}
              value={state.description}
              className="customInput"
            />
          </InputGroup>
          <InputGroup className="mb-2 borderRight">
            <InputGroup.Prepend>
              <InputGroup.Text className="inputPrepend">
                <MdPlace className="filtericonStyle" />
              </InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              placeholder="Username"
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={(event) => {
                handleChange(event, "location");
              }}
              value={state.location}
              className="customInput"
            />
          </InputGroup>

          <InputGroup  className=" checkbox">
            <Form.Check
              type="checkbox"
              label="Full time Only"
              onChange={(event) => {
                handleChange(event, "full_time");
              }}
              checked={state.full_time}
            />

            <Button variant="outline-success" onClick={handleSearch} className="searchButton">
              Search
            </Button>
          </InputGroup>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Filter;
