type Props = {
    question: String;
    answers: String[];
    callback: any;
    userAnswer: any;
    questionNumber: Number;
    totalQuestions: Number;
}

const QuestionCard: React.FC<Props> = ({ question, answers, callback, userAnswer, questionNumber, totalQuestions }) => (
    <>
    <p className="number">
        Question: {questionNumber} / {totalQuestions}
    </p>

    <p className="" dangerouslySetInnerHTML={{__html: question}} />

    <div>
       {
        answers.map(answer => (
            <div>
            <button disabled={userAnswer} onClick={callback}>
                <span dangerouslySetInnerHTML={{ __html:answer }}></span>
            </button>
        </div>
        ))
       }
    </div>
    </>
)

export default QuestionCard