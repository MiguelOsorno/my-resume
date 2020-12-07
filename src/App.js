
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { About } from "./componets/About";
import { Experience } from "./componets/Experience";
import { Skills } from "./componets/Skills";

import avatarImg from './img/myAvatar.png';

import './App.css';

export const App = () => {
    return (
        <Router>
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                    </div>
                    <div className='col-6'>
                        <nav>
                            <ul className='menu'>
                                <li>
                                    <Link className='menu_links' to='/'>Sobre mí</Link>
                                </li>
                                <li>
                                    <Link className='menu_links' to='/experience'>Experiencia</Link>
                                </li>
                                <li>
                                    <Link className='menu_links' to='/skill'>Conocimientos</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-lg-6'>
                        <Switch>
                            <Route exact path='/'>
                                <About />
                            </Route>
                            <Route exact path='/experience'>
                                <Experience />
                            </Route>
                            <Route exact path='/skill'>
                                <Skills className='animate__animated animate__fadeIn' />
                            </Route>
                        </Switch>
                    </div>
                    <div className='col-lg-6 container-avatar'>
                        <img className='avatar' src={ avatarImg } alt='perfil' />
                    </div>
                </div>
            </div>
        </Router>
    )
}
