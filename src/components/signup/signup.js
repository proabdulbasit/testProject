import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const submit_btn = async () => {
    console.log(name, email, phone, password);
    let result = await fetch(`http://54.172.238.100:8888/register`, {
      method: "POST",
      body: JSON.stringify({
        name,
        email,
        phone,
        password,
      }),
      headers: {
        "content-type": "application/json",
      },
    });
    result = await result.json();
    console.log(result);
    navigate("/signin");
  };
  return (
    <div>
      <div className="input-filed">
        <input
          className="input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="Enter name"
        ></input>
        <input
          className="input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          placeholder="Enter email"
        ></input>
        <input
          className="input"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          type="text"
          placeholder="Enter phone"
        ></input>
        <input
          className="input"
          type="text"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <div className="btn">
          <button
            className="submite-btn"
            type="submite"
            onClick={() => submit_btn()}
          >
            Submite
          </button>
        </div>
      </div>
    </div>
  );
};
export default Signup;
