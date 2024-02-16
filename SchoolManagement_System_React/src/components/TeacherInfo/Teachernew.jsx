import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Teachernew = () => {
  const naviGate = useNavigate();

  const [photo, setPhoto] = useState("");

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

  const changeData = (event) => {
    const name = event.target.name;
    if (name !== "tech_photo") {
      const value = event.target.value;

      setInitVal((preVal) => {
        return {
          ...preVal,
          [name]: value,
        };
      });
    } else {
      const file = event.target.files[0];

      setInitVal((preVal) => {
        return {
          ...preVal,
          [name]: file.name,
        };
      });
      setPhoto(file);
    }
  };

  const addData = (event) => {
    event.preventDefault();

    const url = "http://localhost:8080/upload";
    const formdata = new FormData();

    formdata.append("file", photo);

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    axios
      .post(url, formdata, config)
      .then((resp) => {
        console.log(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });

    axios
      .post("http://localhost:8080/tech_reg", initVal)
      .then(() => {
        console.log("submit successfully");
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
  const resetData = () => setInitVal(0);

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
          <input type="submit" className="btn btn-primary" />
          <button
            type="reset"
            className="btn btn-info  ml-2"
            onClick={resetData}
          >
            Reset
          </button>
        </div>
      </form>
    </>
  );
};

export default Teachernew;
