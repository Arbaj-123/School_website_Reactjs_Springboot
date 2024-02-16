const SubCopy = () => {
  return (
    <>
      {/* <div className="content-body">
        <div className="container-fluid"> */}
      <div className="row page-titles mx-0">
        <div className="col-sm-6 p-md-0">
          <div className="welcome-text">
            <h4>Hi, welcome back!</h4>
            <span className="ml-1">Datatable</span>
          </div>
        </div>
        <div className="col-sm-6 p-md-0 justify-content-sm-end mt-2 mt-sm-0 d-flex">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <a href="javascript:void(0)">Table</a>
            </li>
            <li className="breadcrumb-item active">
              <a href="javascript:void(0)">Datatable</a>
            </li>
          </ol>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Basic Datatable</h4>
            </div>
            <div className="card-body">
              <div className="table-responsive">
                <table
                  id="example"
                  className="display"
                  style={{ minWidth: 845 }}
                >
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Position</th>
                      <th>Office</th>
                      <th>Age</th>
                      <th>Start date</th>
                      <th>Salary</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Tiger Nixon</td>
                      <td>System Architect</td>
                      <td>Edinburgh</td>
                      <td>61</td>
                      <td>2011/04/25</td>
                      <td>$320,800</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </div>
      </div> */}
    </>
  );
};

export default SubCopy;
