import React, { useEffect } from "react";
import {
  Switch,
  Route,
  MemoryRouter,
  BrowserRouter,
  useLocation,
  useHistory,
} from "react-router-dom";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";

import Landing from "./components/Landing";
import Pricing from "./components/Pricing";

const generateClassName = createGenerateClassName({
  productionPrefix: "ma",
});

const RouteTracker = ({ onNavigate, nextPathname }) => {
  const location = useLocation();
  useEffect(() => {
    onNavigate ? onNavigate(location) : console.log("RUNNING AS STANDALONE");
  }, [location]);

  const history = useHistory();
  useEffect(() => {
    if (history.location.pathname !== nextPathname) {
      history.push(nextPathname);
    }
  }, [nextPathname]);

  return null;
};
const Router = ({ defaultRouter, children }) => {
  if (defaultRouter) {
    return <BrowserRouter>{children}</BrowserRouter>;
  } else {
    return <MemoryRouter>{children}</MemoryRouter>;
  }
};
const App = ({ onNavigate, nextPathname, defaultRouter }) => {
  return (
    <div>
      <StylesProvider generateClassName={generateClassName}>
        <Router defaultRouter>
          <RouteTracker onNavigate={onNavigate} nextPathname={nextPathname} />
          <Switch>
            <Route exact path="/pricing" component={Pricing} />
            <Route path="/" component={Landing} />
          </Switch>
        </Router>
      </StylesProvider>
    </div>
  );
};

export default App;
