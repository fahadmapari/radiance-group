import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import GlobalStyles from "./GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
    </>
  );
}

export default App;
