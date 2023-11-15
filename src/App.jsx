import NavBar from "./components/NavBar"
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Cart from "./components/Cart";
import About from "./components/About";
import ItemListContainer from "./components/Item/ItemListContainer";
import ItemDetail from "./components/ItemDetail/ItemDetail";

export const App = () => {
  return (
    <div className="">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<ItemListContainer />} />
          <Route exact path="/cart" element={<Cart />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/detailitem" element={<ItemDetail />} />
        </Routes>
      
      </BrowserRouter>
    </div>
  )
}

export default App