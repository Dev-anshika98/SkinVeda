import { Route, Routes } from "react-router-dom"
import '@fortawesome/fontawesome-free/css/all.min.css';

import Home from "./Pages/Home"


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
     
    </Routes>
  );
}

export default App;
