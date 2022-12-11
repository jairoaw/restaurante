import { BrowserRouter, Routes, Route } from "react-router-dom";
import ListCardapio from "./components/ListCardapio";
import AddCardapio from "./components/AddCardapio";
import EditCardapio from "./components/EditCardapio";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<ListCardapio />} />
          <Route path="add" element={<AddCardapio />} />
          <Route path="edit/:id" element={<EditCardapio />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
