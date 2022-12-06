import React from 'react'
import Card from './shared/Card'
import Button from './shared/Button'
import { useState } from 'react'
import RatingSelect from './RatingSelect'
function FeedbackForm() {
  const [text, setText] = useState('')
  const [rating, setRating] = useState(10)
  const [btnDisabled, setBtnDisbaled] = useState(true)
  const [message, setMessage] = useState('')
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
  return (
    <Card>
      <form>
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
