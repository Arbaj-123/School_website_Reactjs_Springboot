import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const Batchedit = () => {
  const navigate = useNavigate();
  const [initVal, setInitVal] = useState({
    batch_id: "",
    batch_name: "",
  });

  const newId = useParams();

  useEffect(() => {
    updateData();
  }, []);

  const updateData = () => {
    axios
      .get(`http://localhost:8080/batch/${newId.id}`)
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

  const submitData = (event) => {
    event.preventDefault();

    axios
      .put(`http://localhost:8080/batch_ms/${newId.id}`, initVal)
      .then(console.log("update successfully"))
      .catch((error) => {
        console.log(error);
      });

    setInitVal({
      batch_id: "",
      batch_name: "",
    });
    navigate("/Batchmaster");
  };

  return (
    <>
      <div className="container mb-5">
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

          <input
            className="btn btn-primary mt-5"
            type="submit"
            value="Update"
          />
          <button type="reset" className="btn btn-info mt-5 ml-2">
            Reset
          </button>
        </form>
      </div>
    </>
  );
};

export default Batchedit;
