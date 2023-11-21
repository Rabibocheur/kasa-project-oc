import PropTypes from "prop-types";
import styled from "styled-components";

const BannerContent = styled.header`
  width: 100%;
  height: 223px;
  position: relative;
`;

const BannerImg = styled.img`
  width: 100%;
  max-height: 100%;
  object-fit: cover;
  border-radius: 25px;
  filter: brightness(0.8);
`;

const BannerText = styled.h3`
  color: white;
  width: 100%;
  text-align: center;
  font-size: 48px;
  font-weight: 500;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

function Banner({ image, altImg, text }) {
  return (
    <div>
      <BannerContent>
        <BannerImg src={image} alt={altImg} />
        <BannerText>{text}</BannerText>
      </BannerContent>
    </div>
  );
}

Banner.propTypes = {
  altImg: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  text: PropTypes.string,
};

Banner.defaultProps = {
  altImg: "",
  image: "",
  text: "",
};

export default Banner;
