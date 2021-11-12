import React, {useState, useEffect} from 'react'
import Question from './Question.jsx'
import QuestionModal from './QuestionModal.jsx';
import axios from 'axios';

const QuestionsList = ({questions, productId, productInfo}) => {

  const [questionDisplayCount, setQuestionDisplayCount] = useState(2);
  const [questionList, setQuestionList] = useState([]);
  const [moreQuestionVisible, setMoreQuestionVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    // console.log('initial render and when questions is updated ')
    if (questions) {
      setQuestionList(questions)
    }
    if (questions.length > 0) {
      setMoreQuestionVisible(true)
    }
  },[questions])

  useEffect(() => {
    // console.log('initial and rerender on display count')
    if (questionDisplayCount >= questions.length) {
      setMoreQuestionVisible(false)
    }
  },[questionDisplayCount]
  )

  const handleSubmitQuestion = () => {

    axios.get(`/qa/questions/${productId}`)
      .then((result) => {//might add sort function here? new q has 0 helpful and will be add on the bottom
        setQuestionList(result.data)})
      .catch((err) => console.log(err))

  }

  return (
    <div>
      <div className='qa-main-questions'>
        {questionList.slice(0,questionDisplayCount).map(question =>
          <Question question={question} key={question.question_id} productId={productId}/>)
        }
      </div>

      <div>

        {moreQuestionVisible ?
          <div className='qa-more-question' onClick={() => setQuestionDisplayCount(questionDisplayCount + 2)}>
              MORE ANSWERED QUESTIONS
          </div>
          : null
        }

        <div className='qa-more-question' onClick={() => {setIsOpen(true)}}>
          ASK A QUESTION +
        </div>
        <QuestionModal
            open={isOpen}
            productName={productInfo? productInfo.name : 'product'}
            productId={productId}
            onClose={()=> {setIsOpen(false)}}
            onSubmitQuestion={handleSubmitQuestion} />
      </div>
    </div>

  )
}


export default QuestionsList;