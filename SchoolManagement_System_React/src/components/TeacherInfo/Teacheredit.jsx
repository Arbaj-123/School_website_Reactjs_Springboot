import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Teacheredit = () => {
  const naviGate = useNavigate();
  const newId = useParams();

  const [initVal, setInitVal] = useState({
    tech_fname: "",
    tech_mname: "",
    tech_lname: "",
    tech_uname: "",
    tech_password: "",
    tech_mobile: "",
    tech_photo: "",
    tech_address: "",
  });

  useEffect(() => {
    upData();
  }, []);

  const upData = () => {
    axios
      .get(`http://localhost:8080/tech_list/${newId.id}`)
      .then((data) => {
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
      .put(`http://localhost:8080/tech_edit/${newId.id}`, initVal)
      .then(() => {
        console.log("Update successfully");
      })
      .catch((error) => {
        console.log(error);
      });

    setInitVal({
      tech_fname: "",
      tech_mname: "",
      tech_lname: "",
      tech_uname: "",
      tech_password: "",
      tech_mobile: "",
      tech_photo: "",
      tech_address: "",
    });

    naviGate("/Teachertable");
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
              name="tech_fname"
              value={initVal.tech_fname}
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
              name="tech_mname"
              value={initVal.tech_mname}
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
              name="tech_lname"
              value={initVal.tech_lname}
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
              name="tech_mobile"
              value={initVal.tech_mobile}
              onChange={changeData}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Enter User Name"
              name="tech_uname"
              value={initVal.tech_uname}
              onChange={changeData}
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
              placeholder="Enter Password"
              name="tech_password"
              value={initVal.tech_password}
              onChange={changeData}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Photo
            </label>
            <input
              type="file"
              className="form-control"
              id="exampleFormControlInput1"
              placeholder="Choose Photo"
              name="tech_photo"
              // value={initVal.tech_photo}
              onChange={changeData}
            />
          </div>
          <div className="mb-3">
            <label for="exampleFormControlTextarea1" className="form-label">
              Address
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Enter address here...."
              name="tech_address"
              value={initVal.tech_address}
              onChange={changeData}
            ></textarea>
          </div>
          <input type="submit" className="btn btn-primary" value="Update" />
        </div>
      </form>
    </>
  );
};

export default Teacheredit;
