import React from 'react';
import { useNavigate } from 'react-router';
import '../Style/Style.css'

const Home = () => {
    const navigate = useNavigate()
    const handleOnClick = () => {
        navigate('/quize')
    }
    return (
        <div class='start-up'>
            <div class='start-page'>
                <h1>MCQ TEST</h1>
                <h4>Total 30 questions</h4>
                <button onClick={handleOnClick}>Start Now</button>
            </div>
        </div>
    );
};

export default Home;