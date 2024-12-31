import "./Controller.css"
import {useState} from 'react';
import App from '../App';
const Controller = ({onClickButton})=>{


    const onClickValue = (e)=>{
        onClickButton(Number(e.target.value))
    }; 


    return(
        <>
            <button onClick={onClickValue}>+</button>
        </>
    ); 
};

export default Controller