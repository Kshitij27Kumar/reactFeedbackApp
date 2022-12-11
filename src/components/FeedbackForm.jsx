import React from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import { useState, useContext, useEffect } from 'react'
import RatingSelect from './RatingSelect'
import FeedbackContext from '../context/FeedbackContext'
function FeedbackForm() {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisbaled] = useState(true)
  const [message, setMessage] = useState('')
  const { addFeedback, feedbackEdit, updateFeedback } = useContext(
    FeedbackContext
  )

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisbaled(false)
      setText(feedbackEdit.item.text)
      setRating(feedbackEdit.item.rating)
    }
  }, [feedbackEdit])
  const handleTextChange = (e) => {
    if (text === '') {
      setBtnDisbaled(true)
      setMessage(null)
    } else if (text !== '' && text.trim().length < 10) {
      setBtnDisbaled(true)
      setMessage('Text must be atleast 10 characters')
    } else {
      setMessage(null)
      setBtnDisbaled(false)
    }
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      }
      if (feedbackEdit.edit === true)
        updateFeedback(feedbackEdit.item.id, newFeedback)
      else addFeedback(newFeedback)
      setText('')
      setBtnDisbaled(true)
    }
  }
  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate your service with us?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className='input-group'>
          <input
            onChange={handleTextChange}
            type='text'
            placeholder='Write a review'
            value={text}
          />
          <Button type='submit' isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  )
}

export default FeedbackForm
