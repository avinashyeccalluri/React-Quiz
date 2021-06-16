import React, {useState, useEffect} from 'react'

export default function Trivia({setQuestionNumber,questionNumber, setTimeout, data}) {
    const [question, setQuestion] = useState(null)
    const [selectedAnswer, setSelectedAnswer] = useState(null)
    const [className , setClassName] = useState("answer")

    useEffect(()=>{
        setQuestion(data[questionNumber-1])
    }, [questionNumber, data])
    
    const delay = (duration, callback) => {
        setTimeout(() => {
            callback()
        }, duration);
    }

    const handleCLick = (answer)=>{
        setSelectedAnswer(answer);
        setClassName("answer active")
        delay(3000, () => {
            setClassName(answer.correct ? "answer correct" : "answer wrong");
        })
        delay(6000, () => {
            if (answer.correct) {
                setQuestionNumber(questionNumber+1)
                setSelectedAnswer(null)
            }
            else {
                setTimeout(()=> true)
            }
        })
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
