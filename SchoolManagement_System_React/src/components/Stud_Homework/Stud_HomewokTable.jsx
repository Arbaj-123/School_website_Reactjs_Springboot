import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { FaEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";
import { MdPictureAsPdf } from "react-icons/md";

const Stud_HomeworkTable = () => {
  const [bio, setBio] = useState([]);

  const [homeData, setHomeData] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    insData();
  }, []);

  const insData = () => {
    axios
      .get("http://localhost:8080/home_list")
      .then((data) => {
        setBio(data.data);
        setHomeData(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const delData = (id) => {
    axios
      .delete(`http://localhost:8080/home_del/` + id)
      .then(() => {
        console.log("Deleted successfully");
      })
      .catch((error) => {
        console.log(error);
      });

    setBio(bio.filter((val) => val.id !== id));
  };

  const addSearch = (event) => {
    setSearchText(event.target.value);
  };

  const filteredTable = () => {
    const filteredData = bio.filter(
      (data, ind) =>
        data.board.toLowerCase().substring(0, searchText.length) ===
          searchText ||
        data.classem.toLowerCase().substring(0, searchText.length) ===
          searchText ||
        data.batch.toLowerCase().substring(0, searchText.length) ===
          searchText ||
        data.subject.toLowerCase().substring(0, searchText.length) ===
          searchText ||
        data.teacher.toLowerCase().substring(0, searchText.length) ===
          searchText ||
        data.chapter.toLowerCase().substring(0, searchText.length) ===
          searchText ||
        data.pdf.toLowerCase().substring(0, searchText.length) === searchText
    );

    if (searchText !== "") {
      setBio(filteredData);
    } else {
      setBio(homeData);
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
              <NavLink className="btn btn-primary" to="/Stud_newHomework">
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
            <th scope="col">Id</th>
            <th scope="col">Board</th>
            <th scope="col">Class</th>
            <th scope="col">Batch</th>
            <th scope="col">Subject</th>
            <th scope="col">Teacher</th>
            <th scope="col">Chapter</th>
            <th scope="col">PDF File</th>
            {/* <th scope="col">Edit</th>
            <th scope="col">Delete</th> */}
          </tr>
        </thead>
        <tbody>
          {bio.map((val, ind) => {
            return (
              <>
                <tr>
                  <th scope="row">{val.id}</th>
                  <td>{val.board}</td>
                  <td>{val.classem}</td>
                  <td>{val.batch}</td>
                  <td>{val.subject}</td>
                  <td>{val.teacher}</td>
                  <td>{val.chapter}</td>
                  <td>
                    <a
                      className="btn btn-outline-primary"
                      href={`../Images/${val.pdf}`}
                      download="Homework.pdf"
                    >
                      <MdPictureAsPdf></MdPictureAsPdf>
                    </a>
                  </td>

                  {/* <td>
                    <NavLink
                      className="btn btn-success"
                      to={`/Tech_homework_edit/${val.id}`}
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
                  </td> */}
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default Stud_HomeworkTable;
