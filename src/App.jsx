import Home from "./Components/Home";
import { BrowserRouter , Routes , Route } from "react-router-dom";
// import Landlord from "./Components/Landlord/Landlord";
import Landlord from "./Components/Landlord";
import Navbar from "./Components/Navbar/Navbar";
import Register from "./Components/Register";
import Rent from "./Components/Rent/Rent";
import Login from "./Components/Login";
import Booking from "./Components/SearchResults/Booking";

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <div className="App">
      <Routes>
        <Route exact path="/"  element={<Home/>}/>
        <Route path="/landlord" element={<Landlord/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/rent" element={<Rent/>}/>
        <Route path="/Home" element={<Rent/>}/>
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Booking" element={<Booking/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
