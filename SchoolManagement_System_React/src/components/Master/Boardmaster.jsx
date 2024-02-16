// import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
// import Searchbar from "../Searchbar";

export default function Boardmaster() {
  const [bio, setBio] = useState([]);
  const [boardData, setBoardData] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    insData();
  }, []);

  const insData = () => {
    axios
      .get("http://localhost:8080/jcb")
      .then((data) => {
        // console.log(data.data);
        setBio(data.data);
        setBoardData(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const delData = (id) => {
    axios
      .delete(`http://localhost:8080/del/` + id)
      .then(() => {
        console.log("deleted successfully");
      })
      .catch((error) => {
        console.log(error);
      });

    setBio(bio.filter((val, inde) => val.id !== id));
  };

  const addSearch = (event) => {
    setSearchText(event.target.value);
  };
  const filteredTable = () => {
    console.log(searchText);
    const filteredData = bio.filter(
      (student, index) =>
        student.fname.toLowerCase().substring(0, searchText.length) ===
          searchText ||
        student.bid.toLowerCase().substring(0, searchText.length) === searchText
    );

    if (searchText !== "") {
      setBio(filteredData);
    } else {
      setBio(boardData);
    }
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div
              className="btn-group"
              style={{ float: "right", marginTop: "0", marginBottom: "10px" }}
            >
              <NavLink className="btn btn-primary" to="/add">
                Add New
              </NavLink>
            </div>
          </div>
          <div className="col-md-12">
            <div className="search-bar" style={{ width: "100%" }}>
              <label htmlFor="exampleInputEmail1">Search</label>
              <input
                type="text"
                placeholder="search here"
                className="form-control"
                onChange={addSearch}
                value={searchText}
                onKeyUp={filteredTable}
              />
            </div>
          </div>
        </div>
      </div>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Board Id</th>
            <th scope="col">Board Name</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {bio.map((val, ind) => {
            return (
              <>
                <tr>
                  <th scope="col">{val.id}</th>
                  <td>{val.bid}</td>
                  <td>{val.fname}</td>
                  <td>
                    <NavLink className="btn btn-success" to={`/mcb/${val.id}`}>
                      <FaEdit />
                    </NavLink>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => delData(val.id)}
                    >
                      <MdDeleteForever />
                    </button>
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
}
