import MainLogo from "/images/icon.png";
import "./App.css";

function App() {
  return (
    <>
      <nav>
        <div className="MainNavBar">
          <a href="/">Home</a>
          <a href="/">About</a>
          <a href="/">Section1</a>
          <a href="/">Section2</a>
        </div>
        <div>
          <span>🟰</span>
        </div>
      </nav>
      <div className="card"></div>
      <p className="read-the-docs">Reads Docs</p>
      <footer>
        <img src={MainLogo} width="60px" height="60px" alt="MainLogo" />
      </footer>
    </>
  );
}

export default App;
