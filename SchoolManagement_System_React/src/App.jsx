// import Sidebar1 from "./Sidebar1";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Boardmaster from "./components/Master/Boardmaster";
import Boaredmasternew from "./components/Master/Boaredmasternew";
import Boardedit from "./components/Master/Boardedit";
import Navbar from "./components/Navbar";
// import Preloader from "./components/Preloader";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Batchmaster from "./components/Batch/Batchmaster";
import Batchmasternew from "./components/Batch/Batchmasternew";
import Batchedit from "./components/Batch/Batchedit";
import Classmaster from "./components/Class/Classmaster";
import Classmasternew from "./components/Class/Classmasternew";
import Classedit from "./components/Class/Classedit";
import Subjectmaster from "./components/Subject/Subjectmaster";
import Subjectmasternew from "./components/Subject/Subjectmasternew";
import Subjectedit from "./components/Subject/Subjectedit";
import Studenttable from "./components/StudentInfo/Studenttable";
import Studentnew from "./components/StudentInfo/Studentnew";
import Studentedit from "./components/StudentInfo/Studentedit";
import Teachertable from "./components/TeacherInfo/Teachertable";
import Teachernew from "./components/TeacherInfo/Teachernew";
import Teacheredit from "./components/TeacherInfo/Teacheredit";
import HomeworkTable from "./components/Homework/HomewokTable";
import HomeworkNew from "./components/Homework/HomeworkNew";
import HomeworkEdit from "./components/Homework/HomeworkEdit";
// import StudDetail from "./components/StudDetail";
import SubCopy from "./components/Subject/SubCopy";
import Dummy from "./components/StudentInfo/Dummy";
import VideosTable from "./components/Videos/VideoTable";
import NewVideo from "./components/Videos/NewVideo";
import VideoTable from "./components/Videos/VideoTable";
import VideoEdit from "./components/Videos/VideoEdit";
import { useEffect, useState } from "react";
import axios from "axios";
import StudentDetails from "./components/StudentDetails";
import User from "./components/Log/User";
import TeacherSidebar from "./components/TeacherSidebar";
import HomeworkTable1 from "./components/Tech_Homework/HomewokTable1";
import HomeworkNew1 from "./components/Tech_Homework/HomeworkNew1";
import HomeworkEdit1 from "./components/Tech_Homework/HomeworkEdit1";
import VideoTable1 from "./components/Tech_video/VideoTable1";
import NewVideo1 from "./components/Tech_video/NewVideo1";
import VideoEdit1 from "./components/Tech_video/VideoEdit1";
import Studenttable1 from "./components/Studenttable1";
import StudentSidebar from "./components/StudentSidebar";
import Stud_VideoTable from "./components/Stud_video/Stud_VideoTable";
import Stud_HomeworkTable from "./components/Stud_Homework/Stud_HomewokTable";
import Stud_HomeworkNew from "./components/Stud_Homework/Stud_HomeworkNew";
// import Login from "./components/Log/Login";
// import Login from "../../search/src/Login";
// import { useParams, useLocation } from "react-router-dom";
function App() {
  const [newBio, setNewBio] = useState([]);

  useEffect(() => {
    insData();
  }, []);

  const insData = () => {
    axios
      .get("http://localhost:8080/stud_list")
      .then((resp) => {
        setNewBio(resp.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <User />
              </>
            }
          ></Route>

          <Route
            path="/dashboard"
            element={
              <>
                <div id="main-wrapper">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-3">
                        <Navbar />
                        <Sidebar />
                      </div>
                      <div className="col-md-9">
                        <Header desc="Dashboard" curr="Dashboard" />
                        <Content />
                        <Footer />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            }
          ></Route>
          <Route
            path="/boardmaster"
            element={
              <>
                <div id="main-wrapper">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-3">
                        <Navbar />
                        <Sidebar />
                      </div>
                      <div className="col-md-9">
                        <Header desc="Board" curr="BoardMaster" />
                        <Boardmaster />
                        <Footer />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            }
          ></Route>
          <Route
            path="/add"
            element={
              <>
                <div id="main-wrapper">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-3">
                        <Navbar />
                        <Sidebar />
                      </div>
                      <div className="col-md-9">
                        <Header desc="New Board" curr="Add new" />
                        <Boaredmasternew />
                        <Footer />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            }
          ></Route>
          <Route
            path="/mcb/:id"
            element={
              <>
                <div id="main-wrapper">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-3">
                        <Navbar />
                        <Sidebar />
                      </div>
                      <div className="col-md-9">
                        <Header desc="Update Board" curr="BoardMaster" />
                        <Boardedit />
                        <Footer />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            }
          ></Route>
          <Route
            path="/batchmaster"
            element={
              <>
                <div id="main-wrapper">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-3">
                        <Navbar />
                        <Sidebar />
                      </div>
                      <div className="col-md-9">
                        <Header desc="Batch" curr="BatchMaster" />
                        <Batchmaster />
                        <Footer />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            }
          ></Route>
          <Route
            path="/addBatch"
            element={
              <>
                <div id="main-wrapper">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-3">
                        <Navbar />
                        <Sidebar />
                      </div>
                      <div className="col-md-9">
                        <Header desc="New Batch" curr="Add new" />
                        <Batchmasternew />
                        <Footer />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            }
          ></Route>
          <Route
            path="/batch_ms/:id"
            element={
              <>
                <div id="main-wrapper">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-3">
                        <Navbar />
                        <Sidebar />
                      </div>
                      <div className="col-md-9">
                        <Header desc="Update Batch" curr="BatchMaster" />
                        <Batchedit />
                        <Footer />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            }
          ></Route>
          <Route
            path="/classmaster"
            element={
              <>
                <div id="main-wrapper">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-3">
                        <Navbar />
                        <Sidebar />
                      </div>
                      <div className="col-md-9">
                        <Header desc="Class" curr="ClassMaster" />
                        <Classmaster />
                        <Footer />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            }
          ></Route>
          <Route
            path="/addClass"
            element={
              <>
                <div id="main-wrapper">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-3">
                        <Navbar />
                        <Sidebar />
                      </div>
                      <div className="col-md-9">
                        <Header desc="New Class" curr="Add new" />
                        <Classmasternew />
                        <Footer />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            }
          ></Route>
          <Route
            path="/edit/:id"
            element={
              <>
                <div id="main-wrapper">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-3">
                        <Navbar />
                        <Sidebar />
                      </div>
                      <div className="col-md-9">
                        <Header desc="Update Class" curr="ClassMaster" />
                        <Classedit />
                        <Footer />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            }
          ></Route>
          <Route
            path="/subjectmaster"
            element={
              <>
                <div id="main-wrapper">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-3">
                        <Navbar />
                        <Sidebar />
                      </div>
                      <div className="col-md-9">
                        <Header desc="Subject" curr="SubjectMaster" />
                        <Subjectmaster />
                        {/* <SubCopy /> */}
                        <Footer />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            }
          ></Route>
          <Route
            path="/addSubject"
            element={
              <>
                <div id="main-wrapper">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-3">
                        <Navbar />
                        <Sidebar />
                      </div>
                      <div className="col-md-9">
                        <Header desc="New Subject" curr="Add new" />
                        <Subjectmasternew />
                        <Footer />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            }
          ></Route>
          <Route
            path="/subject/:id"
            element={
              <>
                <div id="main-wrapper">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-3">
                        <Navbar />
                        <Sidebar />
                      </div>
                      <div className="col-md-9">
                        <Header desc="Update Subject" curr="SubjectMaster" />
                        <Subjectedit />
                        <Footer />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            }
          ></Route>
          <Route
            path="/studentTable"
            element={
              <>
                <div id="main-wrapper">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-3">
                        <Navbar />
                        <Sidebar />
                      </div>
                      <div className="col-md-9">
                        <Header desc="Student" curr="StudentInfo" />
                        <Studenttable />
                        <Footer />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            }
          ></Route>
          <Route
            path="/newStudent"
            element={
              <>
                <div id="main-wrapper">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-3">
                        <Navbar />
                        <Sidebar />
                      </div>
                      <div className="col-md-9">
                        <Header desc="New Student" curr="Add new" />
                        <Studentnew />
                        <Footer />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            }
          ></Route>
          <Route
            path="/student_edit/:id"
            element={
              <>
                <div id="main-wrapper">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-3">
                        <Navbar />
                        <Sidebar />
                      </div>
                      <div className="col-md-9">
                        <Header desc="Update Student" curr="StudentInfo" />
                        <Studentedit />
                        <Footer />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            }
          ></Route>
          <Route
            path="/teacherTable"
            element={
              <>
                <div id="main-wrapper">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-3">
                        <Navbar />
                        <Sidebar />
                      </div>
                      <div className="col-md-9">
                        <Header desc="Teacher" curr="TeacherInfo" />
                        <Teachertable />
                        <Footer />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            }
          ></Route>
          <Route
            path="/newTeacher"
            element={
              <>
                <div id="main-wrapper">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-3">
                        <Navbar />
                        <Sidebar />
                      </div>
                      <div className="col-md-9">
                        <Header desc="New Teacher" curr="Add new" />
                        <Teachernew />
                        <Footer />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            }
          ></Route>
          <Route
            path="/teacher_edit/:id"
            element={
              <>
                <div id="main-wrapper">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-3">
                        <Navbar />
                        <Sidebar />
                      </div>
                      <div className="col-md-9">
                        <Header desc="Update Teacher" curr="TeacherInfo" />
                        <Teacheredit />
                        <Footer />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            }
          ></Route>
          <Route
            path="/homeworkTable"
            element={
              <>
                <div id="main-wrapper">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-3">
                        <Navbar />
                        <Sidebar />
                      </div>
                      <div className="col-md-9">
                        <Header desc="Homework" curr="HomeworkTable" />
                        <HomeworkTable />
                        <Footer />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            }
          ></Route>
          <Route
            path="/newHomework"
            element={
              <>
                <div id="main-wrapper">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-3">
                        <Navbar />
                        <Sidebar />
                      </div>
                      <div className="col-md-9">
                        <Header desc="New Homework" curr="Add new" />
                        <HomeworkNew />
                        <Footer />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            }
          ></Route>
          <Route
            path="/homework_edit/:id"
            element={
              <>
                <div id="main-wrapper">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-3">
                        <Navbar />
                        <Sidebar />
                      </div>
                      <div className="col-md-9">
                        <Header desc="Update Homework" curr="HomeworkEdit" />
                        <HomeworkEdit />
                        <Footer />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            }
          ></Route>
          <Route
            path="/studDetail"
            element={
              <>
                <div id="main-wrapper">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-3">
                        <Navbar />
                        <Sidebar />
                      </div>
                      <div className="col-md-9">
                        <Header desc="Student Details" curr="StudDetail" />
                        {/* <StudDetail /> */}
                        <Footer />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            }
          ></Route>
          <Route
            path="/dummy/:cls_name"
            element={
              <>
                <div id="main-wrapper">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-3">
                        <Navbar />
                        <Sidebar />
                      </div>
                      <div className="col-md-9">
                        <Header desc="Student Details" curr="StudDetail" />
                        {/* <StudDetail /> */}
                        <StudentDetails newBio={newBio} />

                        <Footer />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            }
          ></Route>
          <Route
            path="/videos"
            element={
              <>
                <div id="main-wrapper">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-3">
                        <Navbar />
                        <Sidebar />
                      </div>
                      <div className="col-md-9">
                        <Header desc="Videos" curr="VideosTable" />
                        <VideoTable />
                        <Footer />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            }
          ></Route>
          <Route
            path="/newVideo"
            element={
              <>
                <div id="main-wrapper">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-3">
                        <Navbar />
                        <Sidebar />
                      </div>
                      <div className="col-md-9">
                        <Header desc="New Video" curr="Add new" />
                        <NewVideo />
                        <Footer />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            }
          ></Route>
          <Route
            path="/videoedit/:id"
            element={
              <>
                <div id="main-wrapper">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-3">
                        <Navbar />
                        <Sidebar />
                      </div>
                      <div className="col-md-9">
                        <Header desc="Update Video" curr="VideoEdit" />
                        <VideoEdit />
                        <Footer />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            }
          ></Route>
          <Route
            path="/techSidebar"
            element={
              <>
                {" "}
                <div id="main-wrapper">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-3">
                        <Navbar />
                        <TeacherSidebar />
                      </div>
                      <div className="col-md-9">
                        <Header
                          desc="Teacher_Dashboard"
                          curr="Tech_Dashboard"
                        />
                        <Studenttable1 />
                        <Footer />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            }
          ></Route>
          <Route
            path="/tech_homeworkTable"
            element={
              <>
                <div id="main-wrapper">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-3">
                        <Navbar />
                        <TeacherSidebar />
                      </div>
                      <div className="col-md-9">
                        <Header desc="Homework Table" curr="Tech_Homework" />
                        <HomeworkTable1 />
                        <Footer />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            }
          ></Route>
          <Route
            path="/Tech_newHomework"
            element={
              <>
                <div id="main-wrapper">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-3">
                        <Navbar />
                        <TeacherSidebar />
                      </div>
                      <div className="col-md-9">
                        <Header desc="New Homework" curr="Add new" />
                        <HomeworkNew1 />
                        <Footer />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            }
          ></Route>
          <Route
            path="/Tech_homework_edit/:id"
            element={
              <>
                <div id="main-wrapper">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-3">
                        <Navbar />
                        <TeacherSidebar />
                      </div>
                      <div className="col-md-9">
                        <Header desc="Update Homework" curr="HomeworkEdit" />
                        <HomeworkEdit1 />
                        <Footer />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            }
          ></Route>
          <Route
            path="/tech_videos"
            element={
              <>
                <div id="main-wrapper">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-3">
                        <Navbar />
                        <TeacherSidebar />
                      </div>
                      <div className="col-md-9">
                        <Header desc="Video Table" curr="Tech_Video" />
                        <VideoTable1 />
                        <Footer />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            }
          ></Route>
          <Route
            path="/tech_newVideo"
            element={
              <>
                <div id="main-wrapper">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-3">
                        <Navbar />
                        <TeacherSidebar />
                      </div>
                      <div className="col-md-9">
                        <Header desc="New Video" curr="Add new" />
                        <NewVideo1 />
                        <Footer />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            }
          ></Route>
          <Route
            path="/tech_videoedit/:id"
            element={
              <>
                <div id="main-wrapper">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-3">
                        <Navbar />
                        <TeacherSidebar />
                      </div>
                      <div className="col-md-9">
                        <Header desc="Update Video" curr="VideoEdit" />
                        <VideoEdit1 />
                        <Footer />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            }
          ></Route>
          <Route
            path="/studentDash"
            element={
              <>
                {" "}
                <div id="main-wrapper">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-3">
                        <Navbar />
                        <StudentSidebar />
                      </div>
                      <div className="col-md-9">
                        <Header desc="Student_Dashboard" curr="Video_Table" />
                        <Stud_VideoTable />
                        <Footer />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            }
          ></Route>
          <Route
            path="/stud_homework"
            element={
              <>
                <div id="main-wrapper">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-3">
                        <Navbar />
                        <StudentSidebar />
                      </div>
                      <div className="col-md-9">
                        <Header desc="Homework Table" curr="Stud_Video" />
                        <Stud_HomeworkTable />
                        <Footer />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            }
          ></Route>
          <Route
            path="/Stud_newHomework"
            element={
              <>
                <div id="main-wrapper">
                  <div className="container-fluid">
                    <div className="row">
                      <div className="col-md-3">
                        <Navbar />
                        <StudentSidebar />
                      </div>
                      <div className="col-md-9">
                        <Header desc="New Homework" curr="Add new" />
                        <Stud_HomeworkNew />
                        <Footer />
                      </div>
                    </div>
                  </div>
                </div>
              </>
            }
          ></Route>
        </Routes>
      </BrowserRouter>

      {/* <Header /> */}

      {/* <Sidebar1 /> */}
    </>
  );
}

export default App;
