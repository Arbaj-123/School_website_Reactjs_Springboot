import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
const Dummy = () => {
  const name = useParams();
  const [filteredData, setFilteredData] = useState([]);
  const [bio, setBio] = useState([]);
  //   console.log(name.cls_name);
  useEffect(() => {
    insData();
  }, []);
  const insData = () => {
    axios
      .get("http://localhost:8080/stud_list")
      .then((data) => {
        console.log(data.data);
        setBio(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //   console.log(bio);
  const [photo, setPhoto] = useState("");
  const imageUpload = (event) => {
    setPhoto(event.target.files[0]);
  };
  const submitForm = (event) => {
    event.preventDefault();
    console.log(photo.name);
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
  };
  return (
    <>
      <form action="" onSubmit={submitForm}>
        <input type="file" name="image" onChange={imageUpload} />
        <input type="submit" value="Submit" />
      </form>
      <table border={1}>
        {filteredData.map((stu, ind) => {
          return (
            <>
              <tr>
                <td>{stu.id}</td>
              </tr>
            </>
          );
        })}
      </table>
    </>
  );
};

export default Dummy;
