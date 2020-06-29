import React from "react";
import Home from "./pages/home";
import Login from "./pages/login";
import store from "./store/index.js";
import { Provider as StoreProvider } from "react-redux";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  useHistory,
} from "react-router-dom";

const App = () => {
  const history = useHistory();
  return (
    <StoreProvider store={store}>
      <Router>
        <Switch history={history}>
          <Route exact path="/" render={() => <Redirect to="/home" />} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/login" component={Login} />
          {/* <Route exact path="/home" component={Home} />
          <Route exact path="/home/artists" component={Artists} />
          <Route exact path="/home/artists/artist" component={ArtistDetail} />
          <Route exact path="/home/artists/artist/album" component={Album} /> */}
        </Switch>
      </Router>
    </StoreProvider>
  );
};

export default App;
