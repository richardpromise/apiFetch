import { useCallback, useEffect, useState } from "react";
import { GiShoppingCart } from "react-icons/gi";
import axios from "axios";
import CustomSelect from "../../selector";
import { Puff } from "react-loader-spinner";
// import CustomSelect from "../select";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [expandedIndex, setExpandedIndex] = useState(null);
  const [category, setCategory] = useState("");
  const [cart, setCart] = useState(0);
  const [loading, setLoading] = useState(false); // Loading state

  const handleChange = (value) => {
    setCategory(value);
    console.log(value);
  };

  // const getData = useCallback(async () => {
  //   setLoading(true); // Set loading to true when fetching starts
  //   let url = `https://fakestoreapi.com/products`;

  //   if (category !== "") {
  //     url += `/category/${category}`;
  //   }

  //   try {
  //     const response = await axios.get(url);
  //     setProducts(response.data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   } finally {
  //     setLoading(false); // Set loading to false after fetching completes
  //   }
  // }, [category]);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get("https://fakestoreapi.com/products");
      setTimeout(() => {
        if (response.status === 200) {
          setProducts(response.data);
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

  function showMore(index) {
    setExpandedIndex(expandedIndex === index ? null : index);
  }

  function truncateText(value, index) {
    return expandedIndex === index ? value : value.substring(0, 20) + "....";
  }

  if (loading)
    return (
      <div className="h-screen flex justify-center items-center w-full flex-col">
        <Puff
          visible={true}
          height="80"
          width="80"
          color="black"
          ariaLabel="puff-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );

  return (
    <>
      <div className="search flex justify-center items-center gap-2">
        <h2 className="font-bold">Search:</h2>
        <CustomSelect handleChange={handleChange} />
      </div>

      {loading ? ( // Show loading spinner when loading
        <div className="flex justify-center items-center h-40">
          <p>Loading...</p>
        </div>
      ) : (
        <div className="w-full h-full grid grid-cols-3 gap-4 overflow-y-scroll p-4">
          {products.map((item, index) => (
            <div
              key={index}
              className="p-2 border flex flex-col items-center gap-3 border-gray-300"
            >
              <div className="w-full flex justify-between">
                <div className="font-bold capitalize">{item.category}</div>
                <div
                  className="border p-3 bg-yellow-500 cursor-pointer"
                  onClick={() => setCart(cart + 1)}
                >
                  <GiShoppingCart />
                </div>
              </div>

              <div className="w-[50%] h-[50%]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full"
                />
              </div>

              <div>{truncateText(item.description, index)}</div>

              <button onClick={() => showMore(index)} className="border p-3">
                {expandedIndex === index ? "show less" : "read more"}
              </button>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
