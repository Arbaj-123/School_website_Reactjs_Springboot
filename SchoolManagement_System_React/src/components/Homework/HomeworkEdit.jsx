import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const HomeworkEdit = () => {
  const naviGate = useNavigate();
  const newId = useParams();
  const [newData, setNewData] = useState([]);

  const [initVal, setInitVal] = useState({
    board: "",
    classem: "",
    batch: "",
    subject: "",
    teacher: "",
    chapter: "",
    pdf: "",
  });

  useEffect(() => {
    upData();
  }, []);

  const upData = () => {
    axios
      .get(`http://localhost:8080/home_list/${newId.id}`)
      .then((data) => {
        console.log(data.data);
        setInitVal(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const changeData = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setInitVal((preValue) => {
      return {
        ...preValue,
        [name]: value,
      };
    });
  };

  const addData = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:8080/home_edit/${newId.id}`, initVal)
      .then(() => {
        console.log("submit");
      })
      .catch((error) => {
        console.log(error);
      });
    naviGate("/HomeworkTable");
  };

  const addBoard = () => {
    axios
      .get("http://localhost:8080/jcb")
      .then((data) => {
        console.log(data.data);
        setNewData(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const addClass = () => {
    axios
      .get("http://localhost:8080/class_list")
      .then((data) => {
        setNewData(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addBatch = () => {
    axios
      .get("http://localhost:8080/batch")
      .then((data) => {
        setNewData(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addSubject = () => {
    axios
      .get("http://localhost:8080/sub_list")
      .then((data) => {
        setNewData(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addTeacher = () => {
    axios
      .get("http://localhost:8080/tech_list")
      .then((data) => {
        setNewData(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
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
            {newData.map((val, ind) => {
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
            {newData.map((val, ind) => {
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
            {newData.map((val, ind) => {
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
            {newData.map((val, ind) => {
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
            <option selected disabled>
              Select Teacher
            </option>
            {newData.map((val, ind) => {
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
            {/* <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                PDF File
              </label>
              <input
                type="file"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="pdf"
                value={initVal.pdf}
                onChange={changeData}
              />
            </div> */}
            <input type="submit" className="btn btn-primary" />
          </div>
        </div>
      </form>
    </>
  );
};

export default HomeworkEdit;
