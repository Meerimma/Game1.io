import React, {useState} from 'react';
import {Link} from "react-router-dom";
import Popup from "../pages/Popup/Popup";

const Header = () => {

    const [active, setActive] = useState(false)





    return (
        <header className='header'>

            <div className='container'>
                <button className='header__btn-1'> Bridge </button>
                <button className='header__btn-2' onClick={()=>setActive(true)}> Login </button>

                <Link className='header__btn-1' to={'/'} > Начать игру заново </Link>



                <div className='balance'>
                    <div className='container'>
                        <h3 className='balance__title'> Balance: 71, 429 </h3>
                    </div>
                </div>

            </div>
            <Popup active={active} setActive={setActive}/>

        </header>
    );
};

export default Header;