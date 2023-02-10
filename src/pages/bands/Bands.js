import React from "react";
import { useBandsData } from "../../hooks/useBandsData";

import Card from "../../components/card/Card";
import Loader from "../../components/loader/Loader";
import Modal from "../../components/modal/Modal";

import { BandsContainerStyled, BandsErrorMessageStyled } from "./BandsStyles";

const Bands = () => {
	const { data, isLoading, isError, error } = useBandsData();

	return (
		<>
			{isLoading && <Loader />}
			{isError && (
				<BandsErrorMessageStyled>{error.message}</BandsErrorMessageStyled>
			)}

			{data && (
				<BandsContainerStyled>
					{data.data.map((band) => (
						<Card key={band.id} {...band} />
					))}
					<Modal />
				</BandsContainerStyled>
			)}
		</>
	);
};

export default Bands;
