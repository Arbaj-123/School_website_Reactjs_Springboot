import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const Subjectmaster = () => {
  const [bio, setBio] = useState([]);
  const [subjectData, setSubjectData] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    insData();
  }, []);

  const insData = () => {
    axios
      .get("http://localhost:8080/sub_list")
      .then((data) => {
        console.log(data.data);
        setBio(data.data);
        setSubjectData(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const delData = (id) => {
    axios
      .delete(`http://localhost:8080/sub_del/` + id)
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
    const filteredData = bio.filter(
      (val, ind) =>
        val.subject_name.toLowerCase().substring(0, searchText.length) ===
          searchText ||
        val.subject_id.toLowerCase().substring(0, searchText.length) ===
          searchText
    );
    if (searchText !== "") {
      setBio(filteredData);
    } else {
      setBio(subjectData);
    }
  };

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12">
            <div
              className="btn-group"
              style={{ float: "right", marginTop: "0", marginBottom: "10px" }}
            >
              <NavLink className="btn btn-primary" to="/addSubject">
                Add New
              </NavLink>
            </div>
          </div>
          <div className="col-md-12">
            <div
              className="search-bar"
              style={{ width: "100%", marginBottom: "20" }}
            >
              <label htmlFor="exampleInputEmail1">Search</label>
              <input
                type="search"
                placeholder="search here"
                className="form-control mb-2"
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
            <th scope="col">Subject Id</th>
            <th scope="col">Subject Name</th>
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
                  <td>{val.subject_id}</td>
                  <td>{val.subject_name}</td>
                  <td>
                    <NavLink
                      className="btn btn-success"
                      to={`/subject/${val.id}`}
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

export default Subjectmaster;
