import React from 'react'


export const Skills = () => {
    return (
        <div className='row'>
            <div className='col-12'>
                <h1><i className="fas fa-bookmark fa-sm"></i> Conocimientos</h1>
                <hr />
            </div>
            <div className='col-12'>
                <h3>Frontend</h3>
                <div className='row'>
                    <div className='col-3'> 
                        <i className="devicon-javascript-plain colored icons"></i>
                    </div>
                    <div className='col-3'>
                        <i className="devicon-css3-plain-wordmark colored icons"></i>
                    </div>
                    <div className='col-3'>
                        <i className="devicon-html5-plain-wordmark colored icons"></i>
                    </div>
                    <div className='col-3'>
                        <i className="devicon-jquery-plain-wordmark colored icons"></i>
                    </div>
                    <div className='col-3'>
                        <i className="devicon-react-original-wordmark colored icons"></i>
                    </div>
                    <div className='col-3'>
                        <i className="devicon-angularjs-plain colored icons"></i>
                    </div>
                    <div className='col-3'>
                        <i className="devicon-bootstrap-plain-wordmark colored icons"></i>
                    </div>
                    <div className='col-3'>
                        <i className="devicon-sass-original colored icons"></i>
                    </div>
                </div>
            </div>
            <div className='col-12'>
                <h3>Backend</h3>
                <div className='row'>
                    <div className='col-3'>
                        <i className="devicon-nodejs-plain colored icons"></i>
                    </div>
                    <div className='col-3'>
                        <i className="devicon-express-original-wordmark icons"></i>
                    </div>
                </div>
            </div>
            <div className='col-12'>
                <h3>Otros</h3>
                <div className='row'>
                    <div className='col-3'>
                        <i className="devicon-git-plain colored icons"></i>
                    </div>
                    <div className='col-3'>
                        <i className="devicon-typescript-plain colored icons"></i>
                    </div>
                </div>
            </div>
        </div>
        
       
    )
}
