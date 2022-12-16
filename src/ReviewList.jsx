import ReviewItems from "./ReviewItems";
import PropTypes from 'prop-types';

function ReviewList({reviews, handleDelete}) {
  if (!reviews || reviews.length === 0) {
    return (
      <div>There are no Reviews yet</div>
    );
  }
  
  return (
    <>
      <div>
        {reviews.map((item) => (
          <ReviewItems key={item.id} item={item} handleDelete={handleDelete} />
      ))}
      </div>
    </>
  );
}


ReviewList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      rating: PropTypes.number,
      text: PropTypes.string
    })
  )
}
export default ReviewList;
