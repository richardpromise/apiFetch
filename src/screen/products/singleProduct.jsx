import axios from "axios";
import { useEffect, useState } from "react";

export default function SingleProduct() {
  const [product, setProduct] = useState([]);

  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://fakestoreapi.com/products/category`
      );
      setTimeout(() => {
        if (response.status === 200) {
          setProduct(response.data);
          setLoading(false);
        }
      }, 5000);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <div className="">{product.category}</div>;
}
