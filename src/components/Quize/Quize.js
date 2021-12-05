import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import '../Style/Style.css'

const Quize = () => {
    const [questions, setQuestions] = useState([])
    const [resultCount, setResultCount] = useState(0)
    


    const navigate = useNavigate()
    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setQuestions(data))
    }, [])
    const handleInput = (id, answer) => {

        console.log(id, answer)
        // console.log( id)
        const matched = questions.find(question => question.id === id)
        console.log(matched)
        let count = resultCount
        if (answer === matched.answer) {
            count += 1
            setResultCount(count)
        }
    }
    const handleFinish = () => {
        navigate(`/result/${resultCount}`)
    }
    console.log(resultCount)

    
    return (
        <div>
            <div className='quiz-page'>
                <div className='quiz-box'>
                    <div className='time-counter'>
                        <h4>Remaining time</h4>
                        <h4>00:30:00</h4>
                    </div>
                    <div className='all-quiz'>
                        {questions?.map(q => <div className='quiz'>
                            <h3>{q.id}.{q.title}</h3>
                            {q.options?.map(option => <label htmlFor={option} ><input type="radio" onClick={() => handleInput(q.id, option)} name={option} id={option} /> {option}</label>)}

                        </div>)}
                    </div>
                </div>
            </div>
            <button onClick={handleFinish}>Finish</button>
        </div>
    );
};

export default Quize;