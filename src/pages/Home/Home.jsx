import React from 'react';
import im from "../../images/image1.png"
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className='container'>
            <div className='home'>

                <Link className='start__btn' to={'/login'}> Начать игру </Link>


                <h2 className='home__title'> Кто выйграет?</h2>

                <p className='home__text'>Сыграй в игру и испытай удачу! </p>


                <img className='home__image' src={im} alt=''/>

                <img className='home__image' src={im} alt=''/>







            </div>






        </div>
    );
};

export default Home;