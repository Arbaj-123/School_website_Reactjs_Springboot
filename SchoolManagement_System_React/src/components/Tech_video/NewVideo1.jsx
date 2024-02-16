import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewVideo1 = () => {
  const naviGate = useNavigate();

  const [newBoard, setNewBoard] = useState([]);
  const [newClass, setNewClass] = useState([]);
  const [newBatch, setNewBatch] = useState([]);
  const [newTeacher, setNewTeacher] = useState([]);
  const [newSubject, setNewSubject] = useState([]);

  const [initVal, setInitVal] = useState({
    vid_boarde: "",
    vid_class: "",
    vid_batch: "",
    vid_teacher: "",
    vid_subject: "",
    vid_chapter: "",
    vid_link: "",
    vid_board: "",
  });

  const changeData = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInitVal((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const submitForm = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8080/vid_reg", initVal)
      .then(() => {
        console.log("Submit Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
    naviGate("/tech_videos");
  };

  const addBoard = () => {
    axios
      .get("http://localhost:8080/jcb")
      .then((data) => {
        setNewBoard(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addClass = () => {
    axios
      .get("http://localhost:8080/class_list")
      .then((data) => {
        setNewClass(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addBatch = () => {
    axios
      .get("http://localhost:8080/batch")
      .then((data) => {
        setNewBatch(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addSubject = () => {
    axios
      .get("http://localhost:8080/sub_list")
      .then((data) => {
        setNewSubject(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addTeacher = () => {
    axios
      .get("http://localhost:8080/tech_list")
      .then((data) => {
        setNewTeacher(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const resetData = () => setInitVal(0);
  return (
    <>
      <form onSubmit={submitForm}>
        <div>
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Board</label>
            <select
              className="form-control"
              id="exampleFormControlSelect1"
              name="vid_boarde"
              onChange={changeData}
              value={initVal.vid_boarde}
              onClick={addBoard}
              required
            >
              <option defaultValue>Select Board</option>
              {newBoard.map((val, ind) => {
                return <option value={val.fname}>{val.fname}</option>;
              })}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Class</label>
            <select
              className="form-control"
              id="exampleFormControlSelect1"
              name="vid_class"
              onChange={changeData}
              value={initVal.vid_class}
              onClick={addClass}
              required
            >
              <option defaultValue>Select Class</option>
              {newClass.map((dat, ind) => {
                return <option value={dat.cls_name}>{dat.cls_name}</option>;
              })}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Batch</label>
            <select
              className="form-control"
              id="exampleFormControlSelect1"
              name="vid_batch"
              onChange={changeData}
              value={initVal.vid_batch}
              onClick={addBatch}
              required
            >
              <option defaultValue>Select Batch</option>
              {newBatch.map((dat, ind) => {
                return <option value={dat.batch_name}>{dat.batch_name}</option>;
              })}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Teacher</label>
            <select
              className="form-control"
              id="exampleFormControlSelect1"
              name="vid_teacher"
              onChange={changeData}
              value={initVal.vid_teacher}
              onClick={addTeacher}
              required
            >
              <option defaultValue>Select Teacher</option>
              {newTeacher.map((val, ind) => {
                return (
                  <option value={val.tech_fname}>
                    {val.tech_fname}&nbsp;
                    {val.tech_mname}&nbsp;
                    {val.tech_lname}
                  </option>
                );
              })}
              <option>1</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="exampleFormControlSelect1">Subject</label>
            <select
              className="form-control"
              id="exampleFormControlSelect1"
              name="vid_subject"
              onChange={changeData}
              value={initVal.vid_subject}
              onClick={addSubject}
            >
              <option defaultValue>Select Subject</option>
              {newSubject.map((val, ind) => {
                return (
                  <option value={val.subject_name}>{val.subject_name}</option>
                );
              })}
              <option>1</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Chapter Name</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter chapter name"
            name="vid_chapter"
            onChange={changeData}
            value={initVal.vid_chapter}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Video Link</label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter video link"
            name="vid_link"
            onChange={changeData}
            value={initVal.vid_link}
            required
          />
        </div>
        <input type="submit" className="btn btn-primary" value="submit" />
        <button type="reset" className="btn btn-info ml-3" onClick={resetData}>
          Reset
        </button>
      </form>
    </>
  );
};

export default NewVideo1;
