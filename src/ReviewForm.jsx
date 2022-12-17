import React from 'react'
import {useState} from 'react';
import Button from './Button';
import GiveRating from './GiveRating';


function ReviewForm({addReview}) {
    const [text, setText] = useState('');
    const [msg, setMsg] = useState('');
    const [btnDisabled, setBtnDisabled] = useState(true);
    const [rating, setRating] = useState(10)
   

    const submitHandler = (e) => {
        e.preventDefault();
        if (text.trim().length > 15) {
            const newReview = {
                text,
                rating
            }
            addReview(newReview);
            setText("");
            setBtnDisabled(true);
        }
    }
    
    const changeHandler = (e) => {
        if (text === '') {
            setMsg(null);
            setBtnDisabled(true)
        }
        else if (text !== "" && text.trim().length <= 15) {
            setMsg("Your character should be more than 15");
            setBtnDisabled(true)
        }
        else {
            setMsg(null)
            setBtnDisabled(false)
        }
        setText(e.target.value);
    }
  return (
    <>
        <div className='form-wrapper'>
            <form onSubmit={submitHandler}>
                <h3 className='form-head'>Please give your Review</h3>
                <div className='container'>
                    <div className='rating-wrapper'>
                        <GiveRating select={(rating) => setRating(rating)} />
                    </div>
                    <div className='input-container'>
                        <input type="text" onChange={changeHandler} className='input' placeholder='Write your review here' value={text} />
                        <Button type="submit" version="primary" isDisable={btnDisabled}>
                            Submit
                        </Button>
                    </div>
                </div>
                {msg && <div className='val-msg'>{msg}</div>}
            </form>
        </div>
      
    </>
  )
}

export default ReviewForm
