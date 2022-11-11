import React, { useState } from "react";

const FilterCatogory = () => {
  const [category, SetCategory] = useState("");

  const prodcategory = [
    "Electronics",
    "home & Kitchen",
    "Books",
    "Fashion",
    "Food",
  ];

  const handleChange = (e) => {
    SetCategory(e.target.value);
    console.log(e.target.value);
  };

  // const handleSubmit = async () => {
  //   let responce = await fetch();
  //   let data = await responce.json;
  //   return data;
  // };
  // handleSubmit().then((data) => console.log("data",data));

  

  return (
    <div>
      <div>
        <h6>Category</h6>
        <label htmlFor="Electronics">
          {" "}
          <input
            type="checkbox"
            name="Electronics"
            id=""
            value={category}
            onChange={handleChange}
          />
          Electronics
        </label>
      </div>
      <div>
        <label htmlFor="Home & kitchen">
          <input
            type="checkbox"
            name="Home & Kitchen"
            id=""
            value={category}
            onChange={handleChange}
          />
          Home & kitchen
        </label>

        <div>
          <label htmlFor="Books">
            {" "}
            <input
              type="checkbox"
              name="Books"
              id=""
              value={category}
              onChange={handleChange}
            />
            Books
          </label>
        </div>
        <div>
          <label htmlFor="Fashion">
            {" "}
            <input
              type="checkbox"
              name="Fashion"
              id=""
              value={category}
              onChange={handleChange}
            />
            Fashion
          </label>
        </div>
        <div>
          <label htmlFor="Food">
            {" "}
            <input
              type="checkbox"
              name="Food"
              id=""
              value={category}
              onChange={handleChange}
            />
            Food
          </label>
        </div>
      </div>
      <button onClick={handleSubmit}>Search</button>
    </div>
  );
};

export default FilterCatogory;
