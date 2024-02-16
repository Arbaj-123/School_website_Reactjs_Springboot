// import React from 'react'

import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

export default function Boardedit() {
  const NaviGate = useNavigate();

  const [initVal, setInitVal] = useState({
    bid: "",
    fname: "",
  });

  const newId = useParams();

  useEffect(() => {
    updData();
  }, []);

  const updData = () => {
    // event.preventDefault();

    axios
      .get(`http://localhost:8080/jcb/${newId.id}`)
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
      .put(`http://localhost:8080/mcb/${newId.id}`, initVal)
      .then(console.log("update successfully"))
      .catch((error) => {
        console.log(error);
      });

    setInitVal({
      bid: "",
      fname: "",
    });

    NaviGate("/boardmaster");
  };

  return (
    <>
      <div className="container">
        <form onSubmit={submitData}>
          <label htmlFor="exampleFormControlInput1">
            <b>Board Id</b>
          </label>
          <input
            className="form-control"
            type="text"
            name="bid"
            value={initVal.bid}
            onChange={changeData}
            placeholder="Enter Board Id"
          />
          <label htmlFor="exampleFormControlInput1">
            <b>Board Name</b>
          </label>
          <input
            className="form-control"
            type="text"
            placeholder="Enter Board Name"
            name="fname"
            value={initVal.fname}
            onChange={changeData}
          />

          <input
            className="btn btn-primary mt-5"
            type="submit"
            value="Update"
          />
        </form>
      </div>
    </>
  );
}
