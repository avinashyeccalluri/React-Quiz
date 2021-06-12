import React, {useState, useEffect} from 'react'

export default function Trivia({setQuestionNumber,questionNumber, setTimeOut, data}) {

    const [question, setQuestion] = useState(null)

    useEffect(()=>{
        setQuestion(data[questionNumber-1])
    },[questionNumber, data])

    return (
        <div className="trivia">

            <div className="question">{question?.question}</div>
            <div className="answers">
                {question?.answers.map((answer)=>{
                    return (
                        <div className="answer">{answer.text}</div>
                    );
                })}
                
            </div>
        </div>
    )
}
