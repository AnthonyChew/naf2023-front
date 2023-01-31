import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { FocusedImage } from "image-focus";

const FocusedImageComponent = ({ imageSrc, x, y , classWrap}) => {
  const imageRef = useRef(null);

  useEffect(() => {
    if (imageRef.current !== null) {
      new FocusedImage(imageRef.current, {
        focus: {
          x,
          y
        }
      });
    }
  }, [x, y]);

  return <img class={classWrap}  alt="Focused" ref={imageRef} src={imageSrc} />;
};

FocusedImageComponent.defaultProps = {
  x: 0,
  y: 0
};

FocusedImageComponent.propTypes = {
  imageSrc: PropTypes.string,
  x: PropTypes.number,
  y: PropTypes.number
};

export default FocusedImageComponent;
