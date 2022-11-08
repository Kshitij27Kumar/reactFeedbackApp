import { useState } from 'react'
function FeedbackItem() {
  const [rating, setRating] = useState(7)
  const [text, setText] = useState('Hi! I am a feedback item')

  return (
    <div className='card'>
      <div className='num-display'>{rating}</div>
      <div className='text-dispaly'>{text}</div>
    </div>
  )
}

export default FeedbackItem
