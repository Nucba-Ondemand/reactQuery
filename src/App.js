import { useQuery } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import axios from "axios";

import Card from "./components/card/Card";
import Loader from "./components/loader/Loader";

import { AppContainerStyled } from "./AppStyles";
import { GlobalStyles } from "./styles/GlobalStyles";

const fetchBands = () => {
	return axios.get("http://localhost:3006/bandas");
};

function App() {
	const { isLoading, data, isError, error, isFetching } = useQuery(
		"bands",
		fetchBands,
		{
			refetchOnMount: "always",
			refetchOnWindowFocus: true,
			refetchOnReconnect: false,
			refetchInterval: 3000,
			refetchIntervalInBackground: false,
		}
	);
	// {
	//   staleTime: 3000,
	// }

	return (
		<>
			{isLoading && <Loader />}
			{isError && (
				<h2 style={{ color: "red", textAlign: "center" }}>{error.message}</h2>
			)}

			<AppContainerStyled>
				{data?.data.map((band) => (
					<Card key={band.id} {...band} />
				))}
			</AppContainerStyled>

			{isFetching && (
				<h2 style={{ color: "white", textAlign: "center" }}>
					Validando los datos...
				</h2>
			)}

			<ReactQueryDevtools />
			<GlobalStyles />
		</>
	);
}

export default App;
