export default function Navbar() {
  return (
    <>
      <div className="nav-header">
        <a href="" className="brand-logo">
          <img className="logo-abbr" src="src/assets/images/logo.png" alt />
          <img
            className="logo-compact"
            src="src/assets/images/logo-text.png"
            alt
          />
          <span className="brand-title">School</span>
          {/* <img
            className="brand-title"
            src="src/assets/images/logo-text.png"
            alt
          /> */}
        </a>

        {/* <div className="nav-control">
          <div className="hamburger">
            <span className="line" />
            <span className="line" />
            <span className="line" />
          </div>
        </div> */}
      </div>
    </>
  );
}
