import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const UpdateProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const parms = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    getUpdate();
  }, []);

  const getUpdate = async () => {
    console.log(parms);
    let result = await fetch(`http://localhost:8888/product/${parms.id}`);
    const data = await result.json();
    console.log(data);
    setName(data.name);
    setPrice(data.price);
    setCategory(data.category);
    setCompany(data.company);
  };
  const updateProduct = async () => {
    const result = await fetch(`http://localhost:8888/update/${parms.id}`, {
      method: "PUT",
      body: JSON.stringify({
        name,
        price,
        category,
        company,
      }),
      headers: {
        "content-type": "application/json",
      },
    });
    const newResult = await result.json();
    console.log(newResult);
    navigate("/productlist");
  };
  return (
    <div>
      <>
        <h1>Welcome to Update Product</h1>

        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Enter Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Enter Category Name"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Enter Company Name"
          value={company}
          onChange={(e) => setCompany(e.target.value)}
        ></input>
        <button onClick={updateProduct}>Submite Data</button>
      </>
    </div>
  );
};
export default UpdateProduct;
