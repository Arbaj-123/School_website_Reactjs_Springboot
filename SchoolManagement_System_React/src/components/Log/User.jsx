import { useState } from "react";
import styles from "./User.module.css";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const User = () => {
  const naviGate = useNavigate();

  //////////////////////////////////////////////Admin Login///////////////////////////////
  const LoginAdmin = () => {
    let uname = document.getElementById("user_name").value;
    let upass = document.getElementById("password").value;
    // console.log(uname, upass);
    if (uname === "Admin@123" && upass === "123") {
      // naviGate("/dashboard");
      location.href = "http://localhost:5173/dashboard";
    } else {
      alert("please fill correct username & password");
    }
  };

  //////////////////////////////////////////////Teacher Login///////////////////////////////
  const [bio, setBio] = useState([]);
  const [loginCreadential, setLoginCreadentials] = useState({
    username: "",
    password: "",
  });
  const getallTeachers = () => {
    axios
      .get("http://localhost:8080/tech_list")
      .then((data) => {
        setBio(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const changeData = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    setLoginCreadentials((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  const loginTeacher = () => {
    let data = bio.filter(
      (teacher, index) =>
        teacher.tech_uname == loginCreadential.username &&
        teacher.tech_password == loginCreadential.password
    );
    console.log(loginCreadential);
    // console.log(data.length);
    if (data.length > 0) {
      naviGate("/techSidebar");
    }
  };

  //////////////////////////////////////////////Student Login///////////////////////////////

  const [newBio, setNewBio] = useState([]);
  const [logInCard, setLogInCard] = useState({
    username: "",
    password: "",
  });

  const getAllStudent = () => {
    axios
      .get("http://localhost:8080/stud_list")
      .then((data) => {
        console.log(data.data);
        setNewBio(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const changeStudent = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setLogInCard((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };

  const LoginStudent = () => {
    let Data = newBio.filter(
      (student, ind) =>
        student.stu_uname == logInCard.username &&
        student.stu_password == logInCard.password
    );
    if (Data.length > 0) {
      naviGate("/studentDash");
    }
  };
  return (
    <>
      <div className={`container-fluid ${styles.body}`}>
        {/* Button trigger modal */}
        <div className={styles.btn}>
          <button
            type="button"
            className="btn btn-primary btn-lg"
            data-toggle="modal"
            data-target="#admin"
          >
            Admin
          </button>
          <button
            type="button"
            className="btn btn-primary btn-lg"
            data-toggle="modal"
            data-target="#teacher"
            onClick={getallTeachers}
          >
            Teacher
          </button>
          <button
            type="button"
            className="btn btn-primary btn-lg"
            data-toggle="modal"
            data-target="#student"
            onClick={getAllStudent}
          >
            Student
          </button>
        </div>
        {/* Modal */}
        <div
          className="modal fade"
          id="admin"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Admin Log In
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <label htmlFor="">Usename :</label>{" "}
                <input
                  className={`form-control ${styles.inpt}`}
                  type="text"
                  placeholder="Username"
                  name="admin_uname"
                  id="user_name"
                  required
                />
                <br />
                <label htmlFor="">Password :</label>{" "}
                <input
                  type="password"
                  className={`form-control ${styles.inpt}`}
                  placeholder="password"
                  name="admin_password"
                  id="password"
                  required
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={LoginAdmin}
                >
                  Log In
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="teacher"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Teacher Log In
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <label htmlFor="">Username:</label>
                <input
                  type="text"
                  name="username"
                  className={`form-control ${styles.inpt}`}
                  placeholder="Username"
                  onChange={changeData}
                  value={loginCreadential.username}
                />
                <br />
                <label htmlFor="">Password :</label>
                <input
                  type="password"
                  name="password"
                  className={`form-control ${styles.inpt}`}
                  placeholder="password"
                  onChange={changeData}
                  value={loginCreadential.password}
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={loginTeacher}
                >
                  Log In
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="student"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">
                  Student Log In
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <label htmlFor="">Username :</label>
                <input
                  type="text"
                  className={`form-control ${styles.inpt}`}
                  placeholder="Username"
                  name="username"
                  value={logInCard.username}
                  onChange={changeStudent}
                />
                <br />
                <label htmlFor="">Password :</label>
                <input
                  type="password"
                  className={`form-control ${styles.inpt}`}
                  placeholder="password"
                  name="password"
                  value={logInCard.password}
                  onChange={changeStudent}
                />
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={LoginStudent}
                >
                  Log In
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default User;
