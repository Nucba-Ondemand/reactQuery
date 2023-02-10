import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

import Card from "../../components/card/Card";
import Loader from "../../components/loader/Loader";

import { BandsContainerStyled, BandsErrorMessageStyled } from "./BandsStyles";

const fetchBands = () => {
	return axios.get("http://localhost:3006/bandas");
};

const Bands = () => {
	const { isLoading, data, isError, error } = useQuery("bands", fetchBands, {
		cacheTime: 4000,
		select: (data) => {
			const newBands = data.data.map((band) => ({ ...band, genre: "Cumbia" }));
			return { ...data, data: newBands };
		},
	});

	//CUSTOM HOOK
	// const { data, isLoading, isError, error } = useBandsData();

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
				</BandsContainerStyled>
			)}
		</>
	);
};

export default Bands;
