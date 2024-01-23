import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signin.css";
const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [first, setFirst] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("token");
    console.log(auth);
    if (auth) {
      navigate("/");
    } 
  }, [first]);
  const dataSubmit = async () => {
    // console.log(eamil, password);
    const result = await fetch("http://54.172.238.100:8888/login", {
      method: "POST",
      body: JSON.stringify({
        email,
        password,
      }),
      headers: {
        "content-type": "application/json",
      },
    });
    const newData = await result.json();
    console.log(newData);
    // if(newData.token){

    if (newData) {
      localStorage.setItem("data", JSON.stringify(newData.user));
      localStorage.setItem("token", JSON.stringify(newData.token));
      // navigate("/");
      setFirst(true);
    }
  };
  return (
    <>
      <div className="signin-input-filecd">
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email"
        ></input>
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter password"
        ></input>
        <button className="signin-btn" onClick={() => dataSubmit()}>
          Login
        </button>
      </div>
    </>
  );
};
export default Signin;
