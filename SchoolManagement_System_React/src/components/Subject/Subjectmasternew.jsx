import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Subjectmasternew() {
  const navigate = useNavigate();
  const [initVal, setInitVal] = useState({
    subject_id: "",
    subject_name: "",
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
      .post("http://localhost:8080/sub_reg", initVal)
      .then(console.log("submitted successfully"))
      .catch((error) => {
        console.log(error);
      });

    setInitVal({
      subject_id: "",
      subject_name: "",
    });
    navigate("/Subjectmaster");
  };
  const resetData = () => setInitVal(0);
  return (
    <>
      <div className="container">
        <form onSubmit={submitData}>
          <label htmlFor="exampleFormControlInput1">Subject Id</label>
          <input
            className="form-control"
            type="text"
            name="subject_id"
            value={initVal.subject_id}
            onChange={changeData}
            placeholder="Enter Subject Id"
          />
          <label htmlFor="exampleFormControlInput1">Subject Name</label>
          <input
            className="form-control"
            type="text"
            placeholder="Enter Subject Name"
            name="subject_name"
            value={initVal.subject_name}
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
