import React, { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function Subjectedit() {
  const navigate = useNavigate();
  const [initVal, setInitVal] = useState({
    subject_id: "",
    subject_name: "",
  });

  const newId = useParams();

  useEffect(() => {
    updData();
  }, []);

  const updData = () => {
    axios
      .get(`http://localhost:8080/sub_list/${newId.id}`)
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
      .put(`http://localhost:8080/sub_edit/${newId.id}`, initVal)
      .then(console.log("update successfully"))
      .catch((error) => {
        console.log(error);
      });

    setInitVal({
      subject_id: "",
      subject_name: "",
    });
    navigate("/Subjectmaster");
  };

  return (
    <>
      <div className="container mt-10">
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
