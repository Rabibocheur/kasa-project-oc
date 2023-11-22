import PropTypes from "prop-types";

function Banner({ image, altImg, title }) {
  return (
    <div>
      <header className="banner">
        <img className="banner__img" src={image} alt={altImg} />
        <h3 className="banner__title">{title}</h3>
      </header>
    </div>
  );
}

Banner.propTypes = {
  altImg: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string,
};

Banner.defaultProps = {
  title: "",
};

export default Banner;
