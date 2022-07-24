import { ActionButton } from "./components/ActionButton";
// 🔽 追加
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Toki } from "./pages/Toki";
// import { Omikuji } from "./pages/Omikuji";
// import { Janken } from "./pages/Janken";

const App = () => {
  return (
    <BrowserRouter>
      <h1>react app</h1>
        <li>
          <Link to="/Toki">おみくじ</Link>
        </li>
      <hr />

      <Routes>
        <Route path="/Toki" element={<Toki />} />
      </Routes>
    </BrowserRouter>  
  );
};
export default App;
