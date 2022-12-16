import React from 'react'
import propTypes from 'prop-types';


function ReviewStatus({reviews}) {
  return (
    <>
      <div className='status'>
        <h3>Review Status :  
        {!reviews || reviews.length === 0 ? 'No Review' : reviews.length}
        </h3>
        <h3>Average Rating :  
            {(reviews.reduce(((sum, value) => sum + value.rating), 0) / reviews.length).toFixed(2)}
        </h3>
      </div>
    </>
  )
}


ReviewStatus.prototype = {
    reviews: propTypes.array
}
export default ReviewStatus
