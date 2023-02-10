import { AppContainerStyled } from "./AppStyles";
import Card from "./components/card/Card";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
	//Instalar antes Styled-components.
	//Estilos solo para mostrar cómo arrancamos la app

	return (
		<>
			<AppContainerStyled>
				<Card />
				<Card />
				<Card />
				<Card />
			</AppContainerStyled>
			<GlobalStyles />
		</>
	);
}

export default App;
