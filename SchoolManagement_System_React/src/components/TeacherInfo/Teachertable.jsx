import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const Teachertable = () => {
  const [bio, setBio] = useState([]);

  const [teacherData, setTeacherData] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    showData();
  }, []);

  const showData = () => {
    axios
      .get("http://localhost:8080/tech_list")
      .then((data) => {
        console.log(data.data);
        setBio(data.data);
        setTeacherData(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const delData = (id) => {
    axios
      .delete(`http://localhost:8080/tech_del/` + id)
      .then(() => {
        console.log("deleted");
      })
      .catch((error) => {
        console.log(error);
      });

    setBio(bio.filter((val, ind) => val.id !== id));
  };

  const addSearch = (e) => {
    setSearchText(e.target.value);
  };

  const filteredTable = () => {
    const filterData = bio.filter(
      (vall, ind) =>
        vall.tech_fname.toLowerCase().substring(0, searchText.length) ===
          searchText ||
        vall.tech_mname.toLowerCase().substring(0, searchText.length) ===
          searchText ||
        vall.tech_lname.toLowerCase().substring(0, searchText.length) ===
          searchText ||
        vall.tech_mobile.substring(0, searchText.length) === searchText
      // vall.tech_address.toLowerCase().substring(0, searchText.length) ===
      //   searchText
    );

    if (searchText !== "") {
      setBio(filterData);
    } else {
      setBio(teacherData);
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
              <NavLink className="btn btn-primary" to="/newTeacher">
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
            <th className="-dark" scope="col">
              Id
            </th>
            <th scope="col">Full Name</th>
            {/* <th scope="col">Middle Name</th>
            <th scope="col">Last Name</th> */}
            <th scope="col">Mobile Number</th>
            <th scope="col">Photo</th>
            <th scope="col">Address</th>
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
                    {val.tech_fname}
                    &nbsp;
                    {val.tech_mname}
                    &nbsp;
                    {val.tech_lname}
                  </td>
                  {/* <td>{val.stu_mname}</td>
                  <td>{val.stu_lname}</td> */}
                  <td>{val.tech_mobile}</td>
                  <td>
                    <img
                      src={`../Images/${val.tech_photo}`}
                      width="60"
                      height="60"
                      border-radius="50%"
                      style={{ borderRadius: 50 }}
                    />
                  </td>
                  <td>{val.tech_address}</td>

                  <td>
                    <NavLink
                      className="btn btn-success"
                      to={`/teacher_edit/${val.id}`}
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

export default Teachertable;
