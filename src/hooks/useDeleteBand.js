import { useMutation } from "react-query";
import axios from "axios";

const deleteBand = (bandId) => {
  return axios.delete(`http://localhost:3006/bandas/${bandId}`);
};

export const useDeleteBand = () => {
  return useMutation(deleteBand);
};
