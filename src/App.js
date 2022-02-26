import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import GlobalStyles from "./GlobalStyles";
import Consultant from "./pages/Consultant";

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/radiance-consultant" element={<Consultant />} />
      </Routes>
    </>
  );
}

export default App;
