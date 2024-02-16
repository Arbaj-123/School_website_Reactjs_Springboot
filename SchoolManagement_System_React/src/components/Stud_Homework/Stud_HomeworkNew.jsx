import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Stud_HomeworkNew = () => {
  const naviGate = useNavigate();

  const [newBoard, setNewBoard] = useState([]);
  const [newClass, setNewClass] = useState([]);
  const [newBatch, setNewBatch] = useState([]);
  const [newSubject, setNewSubject] = useState([]);
  const [newTeacher, setNewTeacher] = useState([]);
  const [newPdf, setNewPdf] = useState("");

  const [initVal, setInitVal] = useState({
    board: "",
    classem: "",
    batch: "",
    subject: "",
    teacher: "",
    chapter: "",
    pdf: "",
  });

  const changeData = (e) => {
    const name = e.target.name;
    if (name !== "pdf") {
      const value = e.target.value;

      setInitVal((preValue) => {
        return {
          ...preValue,
          [name]: value,
        };
      });
    } else {
      const file = e.target.files[0];

      setInitVal((preValue) => {
        return {
          ...preValue,
          [name]: file.name,
        };
      });
      setNewPdf(file);
    }
  };

  const addData = (e) => {
    e.preventDefault();

    const url = "http://localhost:8080/upload";
    const formdata = new FormData();

    formdata.append("file", newPdf);

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    axios
      .post(url, formdata, config)
      .then((data) => {
        console.log(data.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .post("http://localhost:8080/home_reg", initVal)
      .then(() => {
        console.log("submit");
      })
      .catch((error) => {
        console.log(error);
      });
    naviGate("/stud_homework");
  };

  const addBoard = () => {
    axios
      .get("http://localhost:8080/jcb")
      .then((data) => {
        console.log(data.data);
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
      <form action="" on onSubmit={addData}>
        <div>
          <label htmlFor="exampleInputEmail1" className="form-label">
            Board
          </label>
          <select
            className="form-select"
            aria-label="Default select example"
            onClick={addBoard}
            name="board"
            value={initVal.board}
            onChange={changeData}
          >
            <option selected>Select Board</option>
            {newBoard.map((val, ind) => {
              return <option value={val.fname}>{val.fname}</option>;
            })}
          </select>
          <label htmlFor="exampleInputEmail1" className="form-label">
            Class
          </label>
          <select
            className="form-select"
            aria-label="Default select example"
            onClick={addClass}
            name="classem"
            value={initVal.classem}
            onChange={changeData}
          >
            <option selected>Select Class</option>
            {newClass.map((val, ind) => {
              return <option value={val.cls_name}>{val.cls_name}</option>;
            })}
          </select>
          <label htmlFor="exampleInputEmail1" className="form-label">
            Batch
          </label>
          <select
            className="form-select"
            aria-label="Default select example"
            onClick={addBatch}
            name="batch"
            value={initVal.batch}
            onChange={changeData}
          >
            <option selected>Select Batch</option>
            {newBatch.map((val, ind) => {
              return <option value={val.batch_name}>{val.batch_name}</option>;
            })}
          </select>
          <label htmlFor="exampleInputEmail1" className="form-label">
            Subject
          </label>
          <select
            className="form-select"
            aria-label="Default select example"
            onClick={addSubject}
            name="subject"
            value={initVal.subject}
            onChange={changeData}
          >
            <option selected>Select Subject</option>
            {newSubject.map((val, ind) => {
              return (
                <option value={val.subject_name}>{val.subject_name}</option>
              );
            })}
          </select>
          <label htmlFor="exampleInputEmail1" className="form-label">
            Teacher
          </label>
          <select
            className="form-select"
            aria-label="Default select example"
            onClick={addTeacher}
            name="teacher"
            value={initVal.teacher}
            onChange={changeData}
          >
            <option selected>Select Teacher</option>
            {newTeacher.map((val, ind) => {
              return (
                <option value={val.tech_fname}>
                  {val.tech_fname}&nbsp;
                  {val.tech_mname}&nbsp;
                  {val.tech_lname}
                </option>
              );
            })}
          </select>
          <div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Chapter Name
              </label>
              <input
                type="text"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="chapter"
                value={initVal.chapter}
                onChange={changeData}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                PDF File
              </label>
              <input
                type="file"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="pdf"
                // value={initVal.pdf}
                onChange={changeData}
              />
            </div>
            <input type="submit" className="btn btn-primary" />
            <button
              type="reset"
              className="btn btn-info  ml-2"
              onClick={resetData}
            >
              Reset
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Stud_HomeworkNew;
