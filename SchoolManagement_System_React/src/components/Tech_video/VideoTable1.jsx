import axios from "axios";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteForever } from "react-icons/md";

const VideoTable1 = () => {
  const [bio, setBio] = useState([]);

  const [videoData, setVideoData] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    insData();
  }, []);

  const insData = () => {
    axios
      .get("http://localhost:8080/vid_list")
      .then((resp) => {
        setBio(resp.data);
        setVideoData(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteData = (id) => {
    axios
      .delete(`http://localhost:8080/vid_del/` + id)
      .then(() => {
        console.log("Delete Successfully");
      })
      .catch((error) => {
        console.log(error);
      });

    setBio(bio.filter((val, ind) => val.id !== id));
  };

  const addSearch = (e) => {
    setSearchText(e.target.value);
  };

  const filteredTable = (e) => {
    const filteredData = bio.filter(
      (dat, ind) =>
        dat.vid_boarde.toLowerCase().substring(0, searchText.length) ===
          searchText ||
        dat.vid_class.toLowerCase().substring(0, searchText.length) ===
          searchText ||
        dat.vid_batch.toLowerCase().substring(0, searchText.length) ===
          searchText ||
        dat.vid_subject.toLowerCase().substring(0, searchText.length) ===
          searchText ||
        dat.vid_teacher.toLowerCase().substring(0, searchText.length) ===
          searchText ||
        dat.vid_chapter.toLowerCase().substring(0, searchText.length) ===
          searchText ||
        dat.vid_link.toLowerCase().substring(0, searchText.length) ===
          searchText
    );
    if (searchText !== "") {
      setBio(filteredData);
    } else {
      setBio(videoData);
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
              <NavLink className="btn btn-primary" to="/tech_newVideo">
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
            <th scope="col">Id</th>
            <th scope="col">Board</th>
            <th scope="col">Class</th>
            <th scope="col">Batch</th>
            <th scope="col">Subject</th>
            <th scope="col">Teacher</th>
            <th scope="col">Chapter</th>
            <th scope="col">Video</th>
            <th scope="col">Edit</th>
            <th scope="col">Delete</th>
          </tr>
        </thead>
        <tbody>
          {bio.map((val, ind) => {
            return (
              <>
                {" "}
                <tr>
                  <th scope="row">{val.id}</th>
                  <td>{val.vid_boarde}</td>
                  <td>{val.vid_class}</td>
                  <td>{val.vid_batch}</td>
                  <td>{val.vid_subject}</td>
                  <td>{val.vid_teacher}</td>
                  <td>{val.vid_chapter}</td>
                  <td>
                    <a href={val.vid_link}>{val.vid_link}</a>
                  </td>
                  <td>
                    <NavLink
                      to={`/tech_videoedit/${val.id}`}
                      className="btn btn-success"
                    >
                      <FaRegEdit />
                    </NavLink>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => deleteData(val.id)}
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

export default VideoTable1;
