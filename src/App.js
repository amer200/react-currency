import { Route, Routes } from "react-router-dom";
import Main from "./components/main";
function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} exact />
        <Route path="/:curr" element={<Main />} />
      </Routes>
    </div>
  );
}

export default App;
