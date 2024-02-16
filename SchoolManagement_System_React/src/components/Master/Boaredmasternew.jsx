// import React from "react";

import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
export default function Boaredmasternew() {
  const navigate = useNavigate();
  const [initVal, setInitVal] = useState({
    bid: "",
    fname: "",
  });

  const changeData = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInitVal((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const submitData = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:8080", initVal)
      .then(console.log("submitted successfully"))
      .catch((error) => {
        console.log(error);
      });

    setInitVal({
      bid: "",
      fname: "",
    });
    navigate("/boardmaster");
  };

  const resetData = () => {
    setInitVal(0);
  };

  return (
    <>
      <div className="container">
        <form onSubmit={submitData}>
          <label htmlFor="exampleFormControlInput1">Board Id</label>
          <input
            className="form-control"
            type="text"
            name="bid"
            value={initVal.bid}
            onChange={changeData}
            placeholder="Enter Board Id"
          />
          <label htmlFor="exampleFormControlInput1">Board Name</label>
          <input
            className="form-control"
            type="text"
            placeholder="Enter Board Name"
            name="fname"
            value={initVal.fname}
            onChange={changeData}
          />

          <input className="btn btn-primary mt-5" type="submit" value="Add" />
          <button
            type="reset"
            className="btn btn-info mt-5 ml-2"
            onClick={resetData}
          >
            Reset
          </button>
        </form>
      </div>
    </>
  );
}
