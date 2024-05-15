import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<Landing />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
