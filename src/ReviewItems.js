
import Card from './Card';
import PropTypes from 'prop-types';
import {FaTimes} from 'react-icons/fa';

function ReviewItems({item, handleDelete}) {
    
  return (
    <>
      <Card>
        <div className="rate">{item.rating}</div>
        <p className="para">{item.text}</p>
        <button className="btn" onClick={() => {handleDelete(item.id)}}>
          <FaTimes color='pink'/>
        </button> 
      </Card>
    </>
  )
}


ReviewItems.propTypes = {
    item: PropTypes.object
}

export default ReviewItems
