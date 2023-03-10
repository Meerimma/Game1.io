import React from 'react';
import {Link} from "react-router-dom";
import im2 from "../../images/image2.jpg";
import im3 from "../../images/image3.jpg";


const Game = () => {


    return (

        <div className='container'>
            <div className='home'>

                <h2 className='home__title'> Вы выиграли!</h2>

                <p className='home__text'>Сыграй в игру и испытай удачу! </p>

                <img className='home__image' src={im2} alt='' />

                <img className='home__image' src={im3} alt=''/>


            </div>






        </div>
    );
};

export default Game;