
import {useState} from 'react';
import ReviewList from './ReviewList';
import reviewData from './reviewData';
import './App.css';
import ReviewStatus from './ReviewStatus';
import ReviewForm from './ReviewForm'
import {v4 as uuidv4} from 'uuid';

function App() {
  const [reviews, setReviews] = useState(reviewData);
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this review from review list?")) {
    setReviews(reviews.filter((item) => item.id !== id));
    }
  }
  const addReview = (newReview) => {
    newReview.id = uuidv4();
    setReviews([newReview, ...reviews])
  }
  return (
    <div className="App">
      <h1>Review Page</h1>
      <ReviewForm addReview={addReview} />
      <ReviewStatus reviews={reviews} />
      <ReviewList reviews={reviews} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
