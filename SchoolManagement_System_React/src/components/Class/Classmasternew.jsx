import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Classmasternew() {
  const navigate = useNavigate();
  const [initVal, setInitVal] = useState({
    cls_id: "",
    cls_name: "",
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
      .post("http://localhost:8080/class_reg", initVal)
      .then(console.log("submitted successfully"))
      .catch((error) => {
        console.log(error);
      });

    setInitVal({
      cls_id: "",
      cls_name: "",
    });
    navigate("/Classmaster");
  };
  const resetData = () => setInitVal(0);

  return (
    <>
      <div className="container">
        <form onSubmit={submitData}>
          <label htmlFor="exampleFormControlInput1">Class Id</label>
          <input
            className="form-control"
            type="text"
            name="cls_id"
            value={initVal.cls_id}
            onChange={changeData}
            placeholder="Enter Class Id"
          />
          <label htmlFor="exampleFormControlInput1">Class Name</label>
          <input
            className="form-control"
            type="text"
            placeholder="Enter Class Name"
            name="cls_name"
            value={initVal.cls_name}
            onChange={changeData}
            required
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
