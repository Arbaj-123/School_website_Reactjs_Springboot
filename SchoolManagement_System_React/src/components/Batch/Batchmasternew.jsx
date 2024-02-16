import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Batchmasternew = () => {
  const navigate = useNavigate();
  const [initVal, setInitVal] = useState({
    batch_id: "",
    batch_name: "",
  });

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

  const submitData = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:8080/bacthreg", initVal)
      .then(console.log("submitted successfully"))
      .catch((error) => {
        console.log(error);
      });

    setInitVal({
      batch_id: "",
      batch_name: "",
    });
    navigate("/Batchmaster");
  };

  const resetData = () => setInitVal(0);

  return (
    <>
      <div className="container">
        <form onSubmit={submitData}>
          <label htmlFor="exampleFormControlInput1">Batch Id</label>
          <input
            className="form-control"
            type="text"
            name="batch_id"
            value={initVal.batch_id}
            onChange={changeData}
            placeholder="Enter Batch Id"
          />
          <label htmlFor="exampleFormControlInput1">Batch Name</label>
          <input
            className="form-control"
            type="text"
            placeholder="Enter Batch Name"
            name="batch_name"
            value={initVal.batch_name}
            onChange={changeData}
          />

          <input className="btn btn-primary mt-5" type="submit" value="Add" />
          <button
            type="reset"
            className="btn btn-info mt-5 ml-2"
            onClick={resetData}
          >
            Reset
          </button>
        </form>
      </div>
    </>
  );
};

export default Batchmasternew;
