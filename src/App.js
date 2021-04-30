import React from "react";
import { Switch, Route } from "react-router-dom";
import { observer } from "mobx-react-lite";
import StoreContext from "./Stores/StoreContext";
import "bootstrap/dist/css/bootstrap.min.css";
import "./static/customStyles.css";
import Header from "./Components/Header";
import routes from "./routes";

const App = () => {
  const store = React.useContext(StoreContext);
 
  return (
    <div  className={store.theme ?"darkTheme":"lightTheme"} >
      <Header />
      <div className="Container">
      <Switch>
        {routes.map((route) => (
          <Route
            key={route}
            path={route.path}
            exact={route.exact}
            children={<route.component />}
          />
        ))}
      </Switch>
      </div>

    </div>
  );
};

export default observer(App);
