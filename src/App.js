import Home from "./Components/Home";
import { BrowserRouter , Routes , Route } from "react-router-dom";
import Landlord from "./Components/Landlord";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <div className="App">
      
      <Routes>
        <Route exact path="/"  component={Home} />
        <Route path="/landlord" component={Landlord}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
