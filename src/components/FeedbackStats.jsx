import React from 'react'
import { useContext } from 'react'
import FeedbackContext from '../context/FeedbackContext'
function FeedbackStats() {
  const { feedback } = useContext(FeedbackContext)
  //calculate average of ratings
  let average =
    feedback.reduce((acc, curr) => {
      return acc + curr.rating
    }, 0) / feedback.length
  average = average.toFixed(1).replace(/[.,]0$/, '') //to fix the decimal place to 1 and
  //to remove 0 if it is occurring after decimal (we passed regex in replace function-1st parameter and 2nd is the string with which we want to replace 0
  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews</h4>
      <h4>Average Rating: {isNaN(average) ? 0 : average}</h4>
    </div>
  )
}
export default FeedbackStats
