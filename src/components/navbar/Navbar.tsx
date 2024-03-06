import "./navbar.scss";

const Navbar = ({ setMode, mode }: any) => {
  const handleModeChange = () => {
    setMode(mode === "#ddd" ? "#222b3c" : "#ddd");
  };

  return (
    <div className="navbar" style={{ background: "#222b3c", color: "#ddd" }}>
      <div className="logo">
        <img src="/logo.svg" />
        <span>React Dashboard</span>
      </div>
      <div className="icons">
        <div className="background-mode">
          <img
            src={`${mode === "#222b3c" ? "/switchOff.svg" : "/switchOn.svg"}`}
            alt=""
            className="icon"
            onClick={handleModeChange}
            style={{ cursor: "pointer" }}
          />
          <img
            src={`${mode === "#222b3c" ? "/light.svg" : "/dark.svg"}`}
            alt=""
            className="icon"
          />
        </div>
        <img src="/search.svg" alt="" className="icon" />
        <img src="/app.svg" alt="" className="icon" />
        <img src="/expand.svg" alt="" className="icon" />
        <div className="notification">
          <img src="/notifications.svg" alt="" />
          <span>1</span>
        </div>
        <div className="user">
          <img
            src="https://omer-duman.vercel.app/assets/duman-img.png"
            alt=""
          />
          <span>Duman</span>
        </div>
        <img src="/settings.svg" alt="" className="icon" />
      </div>
    </div>
  );
};

export default Navbar;
