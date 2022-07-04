import Navbar from "./components/Navbar/Navbar";
import Feed from "./components/Feed/Feed";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div>
        <Feed />
        <Sidebar />
      </div>
    </div>
  );
}

export default App;
