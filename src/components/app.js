import React from "react";
import PropTypes from "prop-types";
import { Switch, Route } from "react-router-dom";
import Proposals from "components/proposals";
import Map from "components/map";

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Proposals} />
          <Route path="/map" component={Map} />
        </Switch>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element
};

export default App;
