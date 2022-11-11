import React from "react";
import { useSelector } from "react-redux";
import "./ProductList.css";

const ProductList = () => {

  const productList = useSelector((state) => state.productReducer.data);
  console.log("products",productList)

  return (
    <div className="row">
      {productList?.map((list, index) => {
        return (
          <>
            <div className="col-md-4" key={index}>
              <img src={list.img} alt="" className="img-fluid" />
              <div>
                <p>{list.title}</p>
                <p>Category :{list.category}</p>
                <p>Price :{list.price}</p>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default ProductList;
