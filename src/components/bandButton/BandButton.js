import React from "react";
import { BandButtonStyled } from "./BandButtonStyles";

const Button = ({ genre }) => {
	return <BandButtonStyled>{genre}</BandButtonStyled>;
};

export default Button;
