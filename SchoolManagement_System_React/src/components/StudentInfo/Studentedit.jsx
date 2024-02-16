import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Studentedit = () => {
  const navigate = useNavigate();

  const [initVal, setInitVal] = useState({
    stu_fname: "",
    stu_mname: "",
    stu_lname: "",
    stu_mobile: "",
    stu_photo: "",
    stu_address: "",
    stu_uname: "",
    stu_password: "",
    stu_cpassword: "",
    stu_board: "",
    stu_class: "",
    stu_batch: "",
  });
  const newId = useParams();

  useEffect(() => {
    upData();
  }, []);

  const upData = () => {
    axios
      .get(`http://localhost:8080/stud_list/${newId.id}`)
      .then((data) => {
        console.log(data.data);
        setInitVal(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const changeData = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInitVal((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const addData = (event) => {
    event.preventDefault();

    axios
      .put(`http://localhost:8080/stud_edit/${newId.id}`, initVal)
      .then(console.log("updated"))
      .catch((error) => {
        console.log(error);
      });
    setInitVal({
      stu_fname: "",
      stu_mname: "",
      stu_lname: "",
      stu_mobile: "",
      stu_photo: "",
      stu_address: "",
      stu_uname: "",
      stu_password: "",
      stu_cpassword: "",
      stu_board: "",
      stu_class: "",
      stu_batch: "",
    });
    navigate("/Studenttable");
  };

  const [bio, setBio] = useState([]);
  const getAllBoardData = () => {
    axios
      .get("http://localhost:8080/jcb")
      .then((data) => {
        // console.log(data.data);
        setBio(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [newClass, setNewClass] = useState([]);
  const getAllClassData = () => {
    axios
      .get("http://localhost:8080/class_list")
      .then((data) => {
        setNewClass(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const [newBatch, setNewBatch] = useState([]);
  const getAllBatch = () => {
    axios
      .get("http://localhost:8080/batch")
      .then((data) => {
        setNewBatch(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <form encType="multipart/form-data" onSubmit={addData}>
        <div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter first name"
              name="stu_fname"
              value={initVal.stu_fname}
              onChange={changeData}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Middle Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter middle name"
              name="stu_mname"
              value={initVal.stu_mname}
              onChange={changeData}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter last name"
              name="stu_lname"
              value={initVal.stu_lname}
              onChange={changeData}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Mobile Number
            </label>
            <input
              type="number"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter mobile number"
              name="stu_mobile"
              value={initVal.stu_mobile}
              onChange={changeData}
            />
          </div>
          {/* <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Photo
            </label>
            <input
              type="file"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Choose Photo"
              name="stu_photo"
              value={initVal.stu_photo}
              onChange={changeData}
            />
          </div> */}
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">
              Address
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Enter address here...."
              name="stu_address"
              value={initVal.stu_address}
              onChange={changeData}
            ></textarea>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter username"
              name="stu_uname"
              value={initVal.stu_uname}
              onChange={changeData}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder=" enter password"
              name="stu_password"
              value={initVal.stu_password}
              onChange={changeData}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Confirm Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Confirm password"
              name="stu_cpassword"
              value={initVal.stu_cpassword}
              onChange={changeData}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Board
            </label>
            <select
              class="form-select"
              aria-label="Default select example"
              name="stu_board"
              value={initVal.stu_board}
              onChange={changeData}
              onClick={getAllBoardData}
            >
              <option selected>Select Board</option>
              {bio.map((valu, index) => {
                return (
                  <>
                    <option value={valu.fname}>{valu.fname}</option>
                  </>
                );
              })}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Class
            </label>
            <select
              class="form-select"
              aria-label="Default select example"
              name="stu_class"
              value={initVal.stu_class}
              onChange={changeData}
              onClick={getAllClassData}
            >
              <option selected>Select Class</option>
              {newClass.map((valu, ind) => {
                return (
                  <>
                    <option value={valu.cls_name}>{valu.cls_name}</option>
                  </>
                );
              })}
            </select>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Batch
            </label>
            <select
              class="form-select"
              aria-label="Default select example"
              name="stu_batch"
              value={initVal.stu_batch}
              onChange={changeData}
              onClick={getAllBatch}
            >
              <option selected>Select Batch</option>
              {newBatch.map((valu, ind) => {
                return (
                  <>
                    <option value={valu.batch_name}>{valu.batch_name}</option>
                  </>
                );
              })}
            </select>
          </div>
          <div>
            <input type="submit" className="btn btn-primary" />
          </div>
        </div>
      </form>
    </>
  );
};

export default Studentedit;
