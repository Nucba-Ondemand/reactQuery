import React from "react";
import {
  BandPhotoContainerStyled,
  BandPhotoImageStyled,
} from "./BandPhotoStyles";

const BandPhoto = () => {
  return (
    <BandPhotoContainerStyled>
      <BandPhotoImageStyled
        src="https://res.cloudinary.com/dcatzxqqf/image/upload/v1655753168/coding/ReactQuery/Scaloneta_xx9xpm.jpg"
        alt="La Scaloneta"
      />
    </BandPhotoContainerStyled>
  );
};

export default BandPhoto;
