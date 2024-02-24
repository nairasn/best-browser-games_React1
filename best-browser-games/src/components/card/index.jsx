import './styles.css';
import PropTypes from 'prop-types';


const Card = ({ name,category, description }) => {
  return(
    <article className="cardContainer">
      <label>{name}</label>
      <h4>{category}</h4>
      <p>{description}</p>
    </article>
  )
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Card;