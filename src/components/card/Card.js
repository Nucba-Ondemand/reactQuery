import React from "react";

import BandPhoto from "../bandPhoto/BandPhoto";
import BandButton from "../bandButton/BandButton";

import {
	CardContainerStyled,
	CardContentContainerStyled,
	CardDescriptionStyled,
	CardTitleStyled,
} from "./CardStyles";

const Card = () => {
	return (
		<CardContainerStyled>
			<BandPhoto />

			<CardContentContainerStyled>
				<CardTitleStyled>La Scaloneta</CardTitleStyled>
				<CardDescriptionStyled>3 títulos profesionales</CardDescriptionStyled>
			</CardContentContainerStyled>

			<BandButton />
		</CardContainerStyled>
	);
};

export default Card;
