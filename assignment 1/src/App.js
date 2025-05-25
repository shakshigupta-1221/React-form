import { Routes, Route } from "react-router-dom";
import Form from "./form";
import Details from "./details";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Form />} />
      <Route path="/details" element={<Details />} />
    </Routes>
  );
}

export default App;
