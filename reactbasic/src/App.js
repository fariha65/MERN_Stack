import Practice from "./pages/practice"; // Ensure component names are capitalized
import About from "./pages/About";
import {BrowserRouter, Route, Routes} from "react-router-dom";

const App = () => {
  return (
  <BrowserRouter>
  <Routes>
  <Route  path="/" component={Practice} />
  <Route  path="/About" component ={About} />
  </Routes>
  </BrowserRouter>
  ) ;// Use the component without the .js extension
};

export default App;
