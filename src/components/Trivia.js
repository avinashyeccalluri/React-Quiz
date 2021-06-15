import React, {useState, useEffect} from 'react'

export default function Trivia({setQuestionNumber,questionNumber, setStop, data}) {

    const [question, setQuestion] = useState(null)
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const [className , setClassName] = useState("answer")

    useEffect(()=>{
        setQuestion(data[questionNumber-1])
    },[questionNumber, data])

    const handleCLick = (answer)=>{
        setSelectedAnswer(answer);
        setClassName("answer active")
        setTimeout(() => {
            setClassName(answer.correct ? "answer correct" : "answer wrong");
        }, 3000);
    }
    return (
        <div className="trivia">

            <div className="question">{question?.question}</div>
            <div className="answers">
                {question?.answers.map((answer)=>{
                    return (
                        <div className={selectedAnswer === answer ? className : "answer"} onClick={()=>handleCLick(answer)}>
                            {answer.text}
                        </div>
                    );
                })}
                
            </div>
        </div>
    )
}
