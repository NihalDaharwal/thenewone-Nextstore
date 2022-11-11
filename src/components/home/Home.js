import Navbar from "../navbar/Navbar";
import Filter from "../filter/Filter";
import ProductList from "../Products/ProductList";
import React, { useEffect } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";
import { products } from "../../redux/action/Product";
import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get("http://127.0.0.1:5000/getproducts").then((response) => {
      console.log(response);
      const categorydata = response.data;
      const updatedData = categorydata.Products;
      dispatch(products(updatedData));
    });
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <div className="flex">
        <div>
          <Filter />
        </div>
        <div>
          <ProductList />
        </div>
      </div>
    </div>
  );
};

export default Home;
