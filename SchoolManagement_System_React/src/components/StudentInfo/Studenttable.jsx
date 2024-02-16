import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const Studenttable = () => {
  const [bio, setBio] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [studentData, setStudentData] = useState([]);

  useEffect(() => {
    insData();
  }, []);

  const insData = () => {
    axios
      .get("http://localhost:8080/stud_list")
      .then((data) => {
        console.log(data.data);
        setBio(data.data);
        setStudentData(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const delData = (id) => {
    axios
      .delete("http://localhost:8080/stud_del/" + id)
      .then(() => {
        console.log("deleted");
      })
      .catch((error) => {
        console.log(error);
      });
    const arr = bio.filter((val, ind) => val.id !== id);
    setBio(arr);
  };

  const addSearch = (e) => {
    setSearchText(e.target.value);
  };

  const filteredTable = () => {
    const filteredData = bio.filter(
      (val, ind) =>
        val.stu_fname.toLowerCase().substring(0, searchText.length) ===
          searchText ||
        val.stu_mname.toLowerCase().substring(0, searchText.length) ===
          searchText ||
        val.stu_lname.toLowerCase().substring(0, searchText.length) ===
          searchText ||
        val.stu_board.toLowerCase().substring(0, searchText.length) ===
          searchText ||
        val.stu_class.toLowerCase().substring(0, searchText.length) ===
          searchText ||
        val.stu_batch.toLowerCase().substring(0, searchText.length) ===
          searchText ||
        val.stu_address.toLowerCase().substring(0, searchText.length) ===
          searchText
    );
    if (searchText !== "") {
      setBio(filteredData);
    } else {
      setBio(studentData);
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
              <NavLink className="btn btn-primary" to="/newStudent">
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
                className="form-control mb-5"
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
            <th className="-dark" scope="col">
              Id
            </th>
            <th scope="col">Full Name</th>
            {/* <th scope="col">Middle Name</th>
            <th scope="col">Last Name</th> */}
            <th scope="col">Mobile Number</th>
            <th scope="col">Photo</th>
            <th scope="col">Address</th>
            {/* <th scope="col">Username</th>
            <th scope="col">Password</th>
            <th scope="col">Confirm Password</th> */}
            <th scope="col">Board</th>
            <th scope="col">Class</th>
            <th scope="col">Batch</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {bio.map((val, ind) => {
            return (
              <>
                <tr>
                  <th scope="row">{val.id}</th>
                  <td>
                    {val.stu_fname}
                    &nbsp;
                    {val.stu_mname}
                    &nbsp;
                    {val.stu_lname}
                  </td>
                  {/* <td>{val.stu_mname}</td>
                  <td>{val.stu_lname}</td> */}
                  <td>{val.stu_mobile}</td>
                  <td>
                    <img
                      src={`../Images/${val.stu_photo}`}
                      alt="Not found"
                      height="50px"
                      width="50px"
                      style={{ borderRadius: 50 }}
                    />
                  </td>
                  <td>{val.stu_address}</td>
                  {/* <td>{val.stu_uname}</td>
                  <td>{val.stu_password}</td>
                  <td>{val.stu_cpassword}</td> */}
                  <td>{val.stu_board}</td>
                  <td>{val.stu_class}</td>
                  <td>{val.stu_batch}</td>
                  <td>
                    <NavLink
                      className="btn btn-success"
                      to={`/student_edit/${val.id}`}
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
};

export default Studenttable;
