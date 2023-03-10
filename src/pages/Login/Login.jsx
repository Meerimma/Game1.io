import React from 'react';
import im from "../../images/image1.png";


import {Link} from "react-router-dom";


const Login = () => {
    return (
        <div>
            <div className='container'>
                <div className='home'>

                    <h2 className='home__title'> Кто выйграет?</h2>
                    <p className='home__text'>Сыграй в игру и испытай удачу! </p>

                    <img className='home__image' src={im} alt=''/>
                    <Link className='header__btn-1'  to={'/Game'}> Left </Link>

                    <img className='home__image' src={im} alt=''/>
                    <Link className='header__btn-1' to={'/Game'}> Right </Link>
                </div>



            </div>

        </div>
    );
};

export default Login;