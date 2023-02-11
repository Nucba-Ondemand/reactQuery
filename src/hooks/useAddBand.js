import { useMutation, useQueryClient } from "react-query";
import axios from "axios";

const addBand = (band) => {
	return axios.post("http://localhost:3006/bandas", band);
};

export const useAddBand = () => {
	const queryClient = useQueryClient();

	return useMutation(addBand, {
		onSuccess: () => {
			queryClient.invalidateQueries("bands");
		},
	});
	// HANDLING MUTATION RESPONSE
	// return useMutation(addBand, {
	//   onSuccess: (data) => {
	//     queryClient.setQueryData("bands", (oldQueryData) => {
	//       return {
	//         ...oldQueryData,
	//         data: [...oldQueryData.data, data.data],
	//       };
	//     });
	//   },
	// });

	// OPTIMISTIC UPDATE
	// return useMutation(addBand, {
	//   onMutate: async (newBand) => {
	//     await queryClient.cancelQueries("bands");
	//     const previousBandsData = queryClient.getQueryData("bands");
	//     queryClient.setQueryData("bands", (oldQueryData) => {
	//       return {
	//         ...oldQueryData,
	//         data: [...oldQueryData.data, { ...newBand }],
	//       };
	//     });

	//     return { previousBandsData };
	//   },

	//   onError: (_err, _newBand, context) => {
	//     queryClient.setQueryData("bands", context.previousBandsData);
	//   },

	//   onSettled: () => {
	//     queryClient.invalidateQueries("bands");
	//   },
	// });
};
