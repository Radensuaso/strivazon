import axios from "axios";

export const fetchProducts = async (query, setProducts) => {
  try {
    const response = await axios.get(
      `${process.env.REACT_APP_BE_BASE_URL}/products?name=${query}`
    );
    setProducts(response);
  } catch (error) {
    console.log(error);
  }
};

export const postProduct = async (productToPost, e) => {
  try {
    e.preventDefault();
    const response = await axios.post(
      `${process.env.REACT_APP_BE_BASE_URL}/products`,
      productToPost
    );

    console.log(response);
  } catch (error) {
    console.log(error);
  }
};
