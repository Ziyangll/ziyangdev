import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Button, ThemeProvider } from "@material-ui/core";
import Home from "./components/home/Home";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contacts from "./components/Contacts";
import theme from "./styles/theme";

export default function App() {
  return (
    <Router>
      <div>
        <ThemeProvider theme={theme}>
          <AppBar position='static' style={{ boxShadow: 'none'}}>
            <Toolbar>
              <Button component={Link} to='/' color='inherit'>
                Ziyang
              </Button>
              <Button component={Link} to='/projects' color='inherit'>
                Projects
              </Button>
              <Button component={Link} to='/resume' color='inherit'>
                Resume
              </Button>
              <Button component={Link} to='/contacts' color='inherit'>
                Contacts
              </Button>
            </Toolbar>
          </AppBar>
        </ThemeProvider>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path='/projects'>
            <Projects />
          </Route>
          <Route path='/resume'>
            <Resume />
          </Route>
          <Route path='/contacts'>
            <Contacts />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
