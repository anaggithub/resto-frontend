import React from "react";
import Home from "./pages/home";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import store from "./store/index.js";
import ThemeProvider from "./themes";
import { Provider as StoreProvider } from "react-redux";
import { deleteToken } from "./helpers/login"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
} from "react-router-dom";

const App = () => {
  const history = useHistory();
  deleteToken()

  return (
    <StoreProvider store={store}>
      <ThemeProvider>
        <Router>
          <Switch history={history}>
            <Route exact path="/" render={() => <Redirect to="/home" />} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/dashboard" component={Dashboard} />
          </Switch>
        </Router>
      </ThemeProvider>
    </StoreProvider>
  );
};

export default App;
