import axios from "axios";
import { useEffect, useState } from "react";
// import "./Content.css";
import { NavLink } from "react-router-dom";

export default function Content() {
  const [bio, setBio] = useState([]);
  const [studentList, setStudentList] = useState();

  useEffect(() => {
    insData();
  }, []);

  const insData = () => {
    axios
      .get("http://localhost:8080/class_list")
      .then((data) => {
        console.log(data.data);
        setBio(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get("http://localhost:8080/stud_list")
      .then((res) => {
        // console.log(res.data);
        let wholeData = res.data;
        setStudentList(wholeData);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  // console.log("student biodara", bio);
  // console.log("student list", studentList);
  // console.log();

  return (
    <>
      <div className="row">
        {bio.map((val, ind) => {
          return (
            <div className="col-lg-3 col-sm-6">
              <div className="card">
                <NavLink
                  to={`/dummy/${val.cls_name}`}
                  className="stat-widget-two card-body"
                >
                  <div className="stat-content">
                    <div className="stat-text">
                      {
                        studentList.filter(
                          (student, index) => student.stu_class == val.cls_name
                        ).length
                      }
                    </div>
                    <div className="stat-digit">
                      <i className="" />
                      {val.cls_name}
                    </div>
                  </div>
                  <div className="progress">
                    <div
                      className="progress-bar progress-bar-success w-85"
                      role="progressbar"
                      aria-valuenow={85}
                      aria-valuemin={0}
                      aria-valuemax={100}
                    />
                  </div>
                </NavLink>
              </div>
            </div>

            // <div className="ag-courses_item">
            //   <a href="#" className="ag-courses-item_link">
            //     <div className="ag-courses-item_bg"></div>

            //     <div className="ag-courses-item_title">
            //       {val.cls_name}&#160;
            //     </div>

            //     <div className="ag-courses-item_date-box">
            //       <span className="ag-courses-item_date">
            //         {
            //           studentList.filter(
            //             (student, index) => student.stu_class == val.cls_name
            //           ).length
            //         }
            //       </span>
            //     </div>
            //   </a>
            // </div>
          );
        })}
      </div>
    </>
  );
}
