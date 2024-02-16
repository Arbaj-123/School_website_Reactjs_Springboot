// import React from 'react'
import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import Searchbar from "../Searchbar";

export default function Batchmaster() {
  const [bio, setBio] = useState([]);
  const [batchData, setBatchData] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    insData();
  }, []);

  const insData = () => {
    axios
      .get("http://localhost:8080/batch")
      .then((data) => {
        console.log(data.data);
        setBio(data.data);
        setBatchData(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const delData = (id) => {
    axios
      .delete(`http://localhost:8080/batch_del/` + id)
      .then(() => {
        console.log("deleted successfully");
      })
      .catch((error) => {
        console.log(error);
      });

    setBio(bio.filter((val, inde) => val.id !== id));
  };

  const addSearch = (e) => {
    setSearchText(e.target.value);
  };

  const filteredTable = () => {
    const filterData = bio.filter(
      (val, ind) =>
        val.batch_name.toLowerCase().substring(0, searchText.length) ===
          searchText ||
        val.batch_id.toLowerCase().substring(0, searchText.length) ===
          searchText
    );

    if (searchText !== "") {
      setBio(filterData);
    } else {
      setBio(batchData);
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
              <NavLink className="btn btn-primary" to="/addBatch">
                Add New
              </NavLink>
            </div>
          </div>
          <div className="col-md-12">
            <div className="search-bar" style={{ width: "100%" }}>
              <label htmlFor="exampleInputEmail1">Search</label>
              <input
                type="search"
                placeholder="search here"
                className="form-control"
                value={searchText}
                onChange={addSearch}
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
            <th scope="col">Batch Id</th>
            <th scope="col">Batch Name</th>
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
                  <td>{val.batch_id}</td>
                  <td>{val.batch_name}</td>
                  <td>
                    <NavLink
                      className="btn btn-success"
                      to={`/batch_ms/${val.id}`}
                    >
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
