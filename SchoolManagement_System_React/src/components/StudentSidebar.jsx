import { NavLink } from "react-router-dom";

const StudentSidebar = () => {
  return (
    <>
      <div className="quixnav">
        <div className="quixnav-scroll">
          <ul className="metismenu" id="menu">
            <li>
              <NavLink className="" to="/studentDash" aria-expanded="false">
                <i className="icon icon-single-04" />
                <span className="nav-text">Student Dashboard</span>
              </NavLink>
            </li>

            <li>
              <NavLink className="" to="/studentDash" aria-expanded="false">
                <i className="icon icon-app-store" />
                <span className="nav-text">Videos</span>
              </NavLink>
              {/* <ul aria-expanded="false">
                <li>
                  <NavLink to="/boardmaster">Boared Master</NavLink>
                </li>
                <li>
                  <NavLink to="/batchmaster">Batch Master</NavLink>
                </li>
                <li>
                  <NavLink to="/classmaster">Class Master</NavLink>
                </li>
                <li>
                  <NavLink to="/subjectmaster">Subject Master</NavLink>
                </li>
              </ul> */}
            </li>
            <li>
              <NavLink className="" to="/stud_homework" aria-expanded="false">
                <i className="icon icon-chart-bar-33" />
                <span className="nav-text">Homework</span>
              </NavLink>
              <ul aria-expanded="false">
                {/* <li>
                  <NavLink to="/studentTable">Student Info</NavLink>
                </li> */}
                {/* <li>
                  <i className="icon icon-single-04" />
                  <NavLink to="/teacherTable">Teacher Dashboard</NavLink>
                </li> */}
                {/* <li>
                <a href="./chart-chartjs.html">Chartjs</a>
              </li>
              <li>
                <a href="./chart-chartist.html">Chartist</a>
              </li>
              <li>
                <a href="./chart-sparkline.html">Sparkline</a>
              </li>
              <li>
                <a href="./chart-peity.html">Peity</a>
              </li> */}
              </ul>
            </li>
            {/* <li className="nav-label">Uploads</li> */}
            <li>
              {/* <a className="has-arrow" href="" aria-expanded="false">
                <i className="icon icon-world-2" />
                <span className="nav-text">Uploads</span>
              </a> */}
              {/* <ul aria-expanded="false">
                <li>
                  <NavLink to="/tech_homeworkTable">Homework</NavLink>
                </li>
                <li>
                  <NavLink to="/tech_videos">Videos</NavLink>
                </li>
              </ul> */}
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default StudentSidebar;
