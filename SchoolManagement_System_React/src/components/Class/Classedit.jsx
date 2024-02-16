import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function Classedit() {
  const navigate = useNavigate();
  const [initVal, setInitVal] = useState({
    cls_id: "",
    cls_name: "",
  });

  const newId = useParams();

  useEffect(() => {
    updData();
  }, []);

  const updData = () => {
    axios
      .get(`http://localhost:8080/class_list/${newId.id}`)
      .then((data) => {
        console.log(data.data);
        setInitVal(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
      .put(`http://localhost:8080/class_edit/${newId.id}`, initVal)
      .then(console.log("update successfully"))
      .catch((error) => {
        console.log(error);
      });

    setInitVal({
      cls_id: "",
      cls_name: "",
    });
    navigate("/Classmaster");
  };

  return (
    <>
      <div className="container mt-10">
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
          />

          <input
            className="btn btn-primary mt-5"
            type="submit"
            value="Update"
          />
          <button type="reset" className="btn btn-info mt-5 ml-2">
            Reset
          </button>
        </form>
      </div>
    </>
  );
}
