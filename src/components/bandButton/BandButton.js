import React from "react";
import { useDeleteBand } from "../../hooks/useDeleteBand";
import { BandButtonStyled } from "./BandButtonStyles";

const BandButton = ({ genre = "", deleteButton = false, id = null }) => {
	const { mutate } = useDeleteBand();

	const handleDelete = () => {
		const auth = window.confirm(
			"Estás muy seguro de eliminar esta banda de tu lista??"
		);
		if (id && auth) {
			mutate(id);
		}
	};

	return (
		<>
			{deleteButton ? (
				<BandButtonStyled onClick={handleDelete} deleteButton={deleteButton}>
					{"Eliminar de mi lista"}
				</BandButtonStyled>
			) : (
				<BandButtonStyled deleteButton={deleteButton}>{genre}</BandButtonStyled>
			)}
		</>
	);
};

export default BandButton;
