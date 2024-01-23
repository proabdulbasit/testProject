import React, { useState } from "react";
const AddProduct = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [company, setCompany] = useState("");
  const sub_btn = async () => {
    // console.log(name, price, category, company);
    const result = await fetch("http://54.172.238.100:8888/addproduct", {
      method: "POST",
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
    const data = await result.json();
    console.log(data);
  };
  return (
    <>
      <h1>Welcome to add product page</h1>
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
      <button onClick={sub_btn}>Submite Data</button>
    </>
  );
};
export default AddProduct;
