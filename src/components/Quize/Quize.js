import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router';
import '../Style/Style.css'

const Quize = (props) => {
    const [questions, setQuestions] = useState([])
    const [resultCount, setResultCount] = useState(0)
    // const [minutes, setMinutes] = useState()
    // const [second, setSecond] = useState()
    // console.log('this is props', props)
    const navigate = useNavigate()

    const { initialMinute = 30, initialSeconds = 0 } = props;
    const [minutes, setMinutes] = useState(initialMinute);
    const [seconds, setSeconds] = useState(initialSeconds);


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

    useEffect(() => {
        let myInterval = setInterval(() => {

            if (seconds > 0) {

                setSeconds(seconds - 1);
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    // clearInterval(myInterval)
                    navigate(`/result/${resultCount}`)
                } else {
                    setMinutes(minutes - 1);
                    setSeconds(59);
                }
            }
        }, 1000)
        return () => {
            clearInterval(myInterval);
        };

    });


    return (
        <div>
            {
                questions && <div className='quiz-page'>
                    <div className='quiz-box'>
                        <div className='time-counter'>
                            <h4>Remaining time</h4>
                            <h4>00:{minutes > 9 ? minutes : `0${minutes}`}:{seconds > 9 ? seconds : `0${seconds}`}</h4>
                        </div>
                        <div className='all-quiz'>
                            {questions?.map(q => <div className='quiz'>
                                <h3>{q.id}.{q.title}</h3>
                                {q.options?.map(option => <label htmlFor={option} ><input type="radio" onClick={() => handleInput(q.id, option)} name={option} id={option} /> {option}</label>)}

                            </div>)}
                        </div>
                        <div className='finish'>
                            <button className='finish-button' onClick={handleFinish}>Finish</button>
                        </div>
                    </div>
                </div>
            }

        </div>
    );
};

export default Quize;