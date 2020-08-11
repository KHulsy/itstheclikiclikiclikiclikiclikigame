import "./packages/react-router-dom/examples/Animation/styles.css";

import React from "react";
import {
  TransitionGroup,
  CSSTransition
} from "react-transition-group";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useLocation,
  useParams
} from "react-router-dom";

export default function AnimationExample() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect to="/hsl/10/90/50" />
        </Route>
        <Route path="*">
          <AnimationApp />
        </Route>
      </Switch>
    </Router>
  );
}
