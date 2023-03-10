import React from 'react';
import {ImCross} from 'react-icons/im'

const Popup = ({active, setActive}) => {

    const signInHandler = (e) =>{
        console.log(e.target[0].value)
        console.log(e.target[1].value)

    }

    const signUpHandler = (e)=>{
        console.log(e.target[0].value)
        console.log(e.target[1].value)
        console.log(e.target[2].value)

    }





    return (
        <div onClick={(e)=>{
            e.preventDefault()
            if(e.target.className.includes('active')){
                setActive(false)
            }
        }} className= {`overlay ${active ? 'overlay_active' : ''}`} >

            <div className='popup'
                 onSubmit={(e)=>{
                     if (status === 'signIn') {
                         signInHandler(e)
                     } else {
                         signUpHandler(e)
                     }
                 }}>


                    <span className='popup__cross' onClick={()=>setActive(false)}> <ImCross/> </span>
                    <h1 className='popup__title'> Sign in to your account</h1>
                    <label className='popup__label' htmlFor="title"> Email address</label>
                    <input   className='popup__email' id='title' type="text"/>
                    <label className='popup__label' htmlFor="title"> enter your password</label>
                    <input  className='popup__password' id='title' type="text"/>
                    <button  className='popup__btn' type='button'> Sign In </button>



            </div>
        </div>
    );
};

export default Popup;