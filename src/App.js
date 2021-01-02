
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect
} from "react-router-dom";

import { About } from "./componets/About";
import { Experience } from "./componets/Experience";
import { Skills } from "./componets/Skills";
import { Home } from "./componets/Home";

import './App.css';

export const App = () => {
    return (
        <Router>
            <div className='container'>
                <div className="menu_movil">
                    <ul>
                        <NavLink exact to="/" ></NavLink>
                    </ul>
                </div>
                <div className='row d-none d-lg-flex'>
                    <div className='col-lg-6'>
                    </div>
                    <div className='col-lg-6 col-md-12'>
                        <nav>
                            <ul className='menu'>
                                <li>
                                    <NavLink activeClassName='menu_links-active' exact className='menu_links' to='/'><span>Sobre mí</span></NavLink>
                                </li>
                                <li>
                                    <NavLink activeClassName='menu_links-active' exact className='menu_links' to='/experience'><span>Experiencia</span></NavLink>
                                </li>
                                <li>
                                    <NavLink activeClassName='menu_links-active' exact className='menu_links' to='/skill'><span>Conocimientos</span></NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className='row d-none d-lg-flex'>
                    <div className='col-lg-6 col-md-12 col-sections'>
                        <Switch>
                            <Route exact path='/'>
                                <About />
                            </Route>
                            <Route exact path='/experience'>
                                <Experience />
                            </Route>
                            <Route exact path='/skill'>
                                <Skills />
                            </Route>
                            <Redirect to="/" />
                        </Switch>
                    </div>
                    <Home />
                </div>

                <div className="row d-lg-none">
                    <div className="col-md-12">
                        <Switch>
                            <Route exact path="/" >
                                <Home />
                            </Route>
                            <Route exact path="/about">
                                <About />
                            </Route>
                            <Route exact path="/experience" >
                                <Experience />
                            </Route>
                            <Route exact path="/skill" >
                                <Skills />
                            </Route>
                            <Redirect to="/" />
                        </Switch>
                    </div>
                </div>

            </div>
        </Router>
    )
}
