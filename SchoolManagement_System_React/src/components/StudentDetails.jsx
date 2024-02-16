// import react from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const StudentDetails = ({ newBio }) => {
  const [bio, setBio] = useState([]);
  const classnew = useParams();
  useEffect(() => {
    const filtedArr = newBio.filter(
      (stud, index) =>
        stud.stu_class.substring(0, classnew.cls_name.length) ===
        classnew.cls_name
    );
    console.log(filtedArr);
    setBio(filtedArr);
  }, []);
  return (
    <>
      <table className="table table-striped">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Full Name</th>
            <th scope="col">Mobile Number</th>
            <th scope="col">Photo</th>
            <th scope="col">Address</th>
            <th scope="col">Board</th>
            <th scope="col">Class</th>
            <th scope="col">Batch</th>
          </tr>
        </thead>
        <tbody>
          {bio.map((val, ind) => {
            return (
              <>
                <tr>
                  <th scope="row">{val.id}</th>
                  <td>
                    {val.stu_fname}
                    &nbsp;
                    {val.stu_mname}
                    &nbsp;
                    {val.stu_lname}
                  </td>
                  <td>{val.stu_mobile}</td>
                  <td>{val.stu_photo}</td>
                  <td>{val.stu_address}</td>
                  <td>{val.stu_board}</td>
                  <td>{val.stu_class}</td>
                  <td>{val.stu_batch}</td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
export default StudentDetails;
