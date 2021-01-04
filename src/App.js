import "./App.css";
import Home from "./components/pages/Home";
import data from "./components/pages/Home/data.json";

function App() {
  return <Home data={data} />;
}

export default App;
