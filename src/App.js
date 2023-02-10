import { useQuery } from "react-query";
import axios from "axios";

import Card from "./components/card/Card";
import Loader from "./components/loader/Loader";

import { AppContainerStyled } from "./AppStyles";
import { GlobalStyles } from "./styles/GlobalStyles";

const fetchBands = () => {
	return axios.get("http://localhost:3006/bandas");
};

function App() {
	const { isLoading, data } = useQuery("bands", fetchBands);

	return (
		<>
			{isLoading && <Loader />}
			<AppContainerStyled>
				{data?.data.map((band) => (
					<Card key={band.id} {...band} />
				))}
			</AppContainerStyled>
			<GlobalStyles />
		</>
	);
}

export default App;
