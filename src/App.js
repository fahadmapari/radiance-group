import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import GlobalStyles from "./GlobalStyles";
import Consultant from "./pages/Consultant";
import Unicorn from "./pages/Unicorn";

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/radiance-consultant" element={<Consultant />} />
        <Route path="/unicorn-enterprises" element={<Unicorn />} />
      </Routes>
    </>
  );
}

export default App;
