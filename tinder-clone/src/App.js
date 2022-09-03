import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header/Header";
import TinderCards from "./components/TinderCards/TinderCards";
import SwipeButtons from "./components/SwipeButtons/SwipeButtons";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <TinderCards />
        <SwipeButtons />
      </div>
    </Router>
  );
}

export default App;
