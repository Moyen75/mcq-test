import React from 'react';
import { useNavigate, useParams } from 'react-router';
import '../Style/Style.css'

const Result = () => {
    const { score } = useParams()
    console.log(score)
    const navigate = useNavigate()
    const handleOnClick = () => {
        navigate('/')
    }
    return (
        <div class='start-up'>
            <div class='start-page'>
                <h1>MCQ RESULT</h1>
                <h4>You got {score} score</h4>
                <button onClick={handleOnClick}>Take again</button>
            </div>
        </div>
    );
};

export default Result;