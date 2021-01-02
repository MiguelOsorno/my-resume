import React from 'react';
import avatarImg from '../img/myAvatar2.png';

export const Home = () => {
    return (
        <div className='col-lg-6 col-md-12 container-avatar px-0 pt-3'>
            <div>
                <div>
                    <img className='avatar avatar-small' src={ avatarImg } alt='perfil' />
                </div>
                <div>
                    <h2>Miguel Osorno</h2>
                    <p>Desarrollador web </p>
                </div>
            </div>      
            <ul className="menu menu--justifyContent-space-evenly menu--bg-green mt-2 px-5">
                    <li>
                        <a href="https://github.com/MiguelOsorno" rel="noreferrer" target="_blank"><span className="icons-contact"><i className="fab fa-github"></i></span></a>
                    </li>
                    <li>
                        <a href="mailto:miguelangel.osornolinares@gmail.com" rel="noreferrer" ><span className="icons-contact"><i className="far fa-envelope"></i></span></a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/miguel-angel-osorno-linares-344b941aa/" rel="noreferrer" target="_blank"><span className="icons-contact"><i className="fab fa-linkedin"></i></span></a>
                    </li>
                    <li>
                        <a href="https://codepen.io/miguel_osorno" rel="noreferrer" target="_blank"><span className="icons-contact"><i className="fab fa-codepen"></i></span></a>
                    </li>
            </ul>
        </div>
    )
}
