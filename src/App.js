import Topbar from "./components/topbar/topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./components/Pages/home/Home";
import './app.css';

function App() {
  return (
    <div>
      <Topbar />
      <div className="container">
        <Sidebar/>
        <Home/>
      </div>
    </div>
  );
}

export default App;
