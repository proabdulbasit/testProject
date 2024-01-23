import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ProductList.css";
const ProductList = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const result = await fetch("http://54.172.238.100:8888/productlist", {
      method: "GET",
    });
    const data = await result.json();
    console.log(data);
    setProduct(data);
  };
  // console.log(product);
  const deleteData = async (id) => {
    const result = await fetch(`http://54.172.238.100:8888/delate/${id}`, {
      method: "DELETE",
    });
    const data = await result.json();
    // console.log(data);
    if (data) {
      // console.log(data);
      getData();
    }
  };
  const seachData = async (e) => {
    let key = e.target.value;
    if (key) {
      const result = await fetch(`http://54.172.238.100:8888/seach/${key}`, {
        method: "GET",
      });
      const data = await result.json();
      if (data) {
        setProduct(data);
      }
    } else {
      getData();
    }
  };

  return (
    <>
      <h2>welcome to add product</h2>
      <input
        type="search"
        placeholder="seching..."
        onChange={seachData}
      ></input>
      <ul className="table">
        <li className="table-filed">No</li>
        <li className="table-filed">Name</li>
        <li className="table-filed">Price</li>
        <li className="table-filed">Category</li>
        <li className="table-filed">Company</li>
        <li className="table-filed">Opration</li>
      </ul>

      {product.length > 0 ? (
        product.map((elem, index) => {
          return (
            <ul key={elem._id} className="table">
              <li className="table-filed">{index}</li>
              <li className="table-filed">{elem.name}</li>
              <li className="table-filed">{elem.price}</li>
              <li className="table-filed">{elem.category}</li>
              <li className="table-filed">{elem.company}</li>
              {/* <li className="table-filed">{elem._id}</li> */}
              <li className="table-filed">
                <button onClick={() => deleteData(elem._id)}>Delete</button>

                <button className="update_btn">
                  <Link to={"/update/" + elem._id}>Update</Link>
                </button>
              </li>
            </ul>
          );
        })
      ) : (
        <h2>Product not found</h2>
      )}
    </>
  );
};
export default ProductList;
