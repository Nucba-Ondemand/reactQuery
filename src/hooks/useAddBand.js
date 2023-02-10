import { useMutation } from "react-query";
import axios from "axios";

const addBand = (band) => {
  return axios.post("http://localhost:3006/bandas", band);
};

export const useAddBand = () => {
  return useMutation(addBand);
};
