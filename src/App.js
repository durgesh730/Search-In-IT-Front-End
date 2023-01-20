import First from "./Component/First";
import { Route, BrowserRouter, Routes, } from "react-router-dom";
import Dash from "./Component/Dash";

function App() {
  return (
    <>
        <BrowserRouter>
        <Routes>
           <Route path='/' element={<First/>} ></Route> 
          <Route path='/dash' element={<Dash/>} ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
