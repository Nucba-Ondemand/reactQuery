import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

import Card from "../../components/card/Card";
import Loader from "../../components/loader/Loader";

import {
	BandsContainerStyled,
	BandsDisabledMessageStyled,
	BandsErrorMessageStyled,
} from "./BandsStyles";
import { Box, Button } from "@mui/material";

const fetchBands = () => {
	return axios.get("http://localhost:3006/bandas");
};

//LA VERSION CON CALLBACKS Y DE ERRORS ESTÁ MAS ABAJO

const Bands = () => {
	const { isLoading, data, isError, error, isIdle, refetch } = useQuery(
		"bands",
		fetchBands,
		{
			cacheTime: 5000,
			enabled: false,
		}
	);

	return (
		<>
			{isLoading && <Loader />}
			{isError && (
				<BandsErrorMessageStyled>{error.message}</BandsErrorMessageStyled>
			)}

			{isIdle && (
				<Box sx={{ width: "100%", textAlign: "center" }}>
					<BandsDisabledMessageStyled>
						Consulta deshablitida
					</BandsDisabledMessageStyled>

					<Button
						sx={{
							backgroundColor: "#4c1d95",
						}}
						variant="contained"
						onClick={refetch}
					>
						Activar
					</Button>
				</Box>
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

//CON CALLBACKS
// const Bands = () => {
// 	const { isLoading, data, isError, error } = useQuery("bands", fetchBands, {
// 	  onSuccess: (data) => console.log("Petición exitosa 🥳", data),
// 	  onError: (error) => console.log("Ocurrió un error 😢", error),
// 	  cacheTime: 4000,
// 	});

// 	return (
// 	  <>
// 		{isLoading && <Loader />}
// 		{isError && (
// 		  <BandsErrorMessageStyled>{error.message}</BandsErrorMessageStyled>
// 		)}

// 		{data && (
// 		  <BandsContainerStyled>
// 			{data.data.map((band) => (
// 			  <Card key={band.id} {...band} />
// 			))}
// 		  </BandsContainerStyled>
// 		)}
// 	  </>
// 	);
//   };

//ERRROR RETRIES
// const Bands = () => {
// 	const { isLoading, data, isError, error } = useQuery("bands", fetchBands, {
// 	  retry: 2,
// 	  retryDelay: 2000,
// 	  cacheTime: 4000,
// 	});

// 	return (
// 	  <>
// 		{isLoading && <Loader />}
// 		{isError && (
// 		  <BandsErrorMessageStyled>{error.message}</BandsErrorMessageStyled>
// 		)}

// 		{data && (
// 		  <BandsContainerStyled>
// 			{data.data.map((band) => (
// 			  <Card key={band.id} {...band} />
// 			))}
// 		  </BandsContainerStyled>
// 		)}
// 	  </>
// 	);
//   };

export default Bands;
