import axios from "axios";

export const fetchProducts = async (query, setProducts) => {
  setProducts({ loading: true });
  const response = await axios.get(
    `${process.env.REACT_APP_BE_BASE_URL}/products?name=${query}`
  );

  const { data } = response;
  setProducts({ data, loading: false });
};
