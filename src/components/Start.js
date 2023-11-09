import React from 'react';
import imgmbti from '../freeImg/mbti.png';
import './Start.css';
import { useNavigate } from 'react-router-dom';

const Start = () => {
    const navigate = useNavigate();

    const navigateToTest = () => {
        navigate("/Test");
    }

    return(
        <div className='logo'>
            <div>
                <img src={imgmbti} alt='logo'/>
                <h2>간단한 MBTI 테스트</h2>
                <button className='startBtn' onClick={navigateToTest}>Start!</button>
            </div>
        </div>
    )
}

export default Start;