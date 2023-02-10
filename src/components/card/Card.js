import React from "react";
import { useLocation } from "react-router-dom";

import BandPhoto from "../bandPhoto/BandPhoto";
import BandButton from "../bandButton/BandButton";
import CardFooter from "../cardFooter/CardFooter";

import {
	CardContainerStyled,
	CardContentContainerStyled,
	CardDescriptionStyled,
	CardTitleStyled,
	LinkStyled,
} from "./CardStyles";

const Card = (props) => {
	const { pathname } = useLocation();
	const { name, img, listeners, genre, lastSong, id } = props;

	return (
		<CardContainerStyled>
			<BandPhoto img={img} alt={name} />

			<CardContentContainerStyled>
				{pathname.match(/bands/i) ? (
					<LinkStyled to={`/band/${id}`}>
						<CardTitleStyled>{name}</CardTitleStyled>
					</LinkStyled>
				) : (
					<CardTitleStyled>{name}</CardTitleStyled>
				)}

				<CardDescriptionStyled>
					{listeners} oyentes mensuales
				</CardDescriptionStyled>
			</CardContentContainerStyled>

			<BandButton genre={genre} />
			{!pathname.match(/bands/i) && <CardFooter lastSong={lastSong} />}
		</CardContainerStyled>
	);
};

export default Card;
