import React from "react";
import { observer } from "mobx-react-lite";
import StoreContext from "../Stores/StoreContext";
import Switch from "@material-ui/core/Switch";
import {Link} from "react-router-dom";

import { BsFillBrightnessHighFill, BsMoon } from "react-icons/bs";

function Header() {
  const store = React.useContext(StoreContext);
    
console.log(store);
  return (
    <div className="headerContainer">
      <div className="headerTitleContainer">
      <Link to={`/`} className="headerTitle">  devjobs</Link>
       
      </div>
      <div className="headerIconsContainer">
        <BsFillBrightnessHighFill className="iconStyle" />
        <Switch checked={store.theme} onChange={store.setTheme} />
        <BsMoon className="iconStyle" />
      </div>
    </div>
  );
}

export default observer(Header);
