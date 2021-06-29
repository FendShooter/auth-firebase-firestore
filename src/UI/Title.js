import PropTypes from 'prop-types';

export default function Title({ heading, text }) {
  return <h1 className={heading}>{text}</h1>;
}

Title.propTypes = {
  heading: PropTypes.string.isRequired,
};
