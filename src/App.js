import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AppBar, Toolbar, Button, ThemeProvider } from "@material-ui/core";
import Home from "./components/home/Home";
import theme from "./styles/theme";
import "./styles/styles.css";
const Projects = lazy(() => import("./components/Projects"));
const Resume = lazy(() => import("./components/Resume"));
const Contacts = lazy(() => import("./components/Contacts"));

export default function App() {
  return (
    <Router>
      <div>
        <ThemeProvider theme={theme}>
          <AppBar position='static' style={{ boxShadow: "none" }}>
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
        <Switch>
          <Route path='/projects'>
            <Suspense fallback={<div className='text center'>Loading...</div>}>
              <Projects />
            </Suspense>
          </Route>
          <Route path='/resume'>
            <Suspense fallback={<div className='text center'>Loading...</div>}>
              <Resume />
            </Suspense>
          </Route>
          <Route path='/contacts'>
            <Suspense fallback={<div className='text center'>Loading...</div>}>
              <Contacts />
            </Suspense>
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
