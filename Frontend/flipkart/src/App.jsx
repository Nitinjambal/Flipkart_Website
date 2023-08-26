import { Box } from "@mui/material";
import Header from "./components/header/Header";
import Home from "../src/components/home/Home";
import DataProvider from "./context/DataProvider";
import { Routes, Route,BrowserRouter } from "react-router-dom";
import DetailView from "./components/details/DetailView";
import Cart from "./components/Cart/Cart";
import OrderSuccess from "./components/cart/OrderSuccess";

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Box style={{ marginTop: 54 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<DetailView />} />
            <Route path="/cart" element={<Cart />}></Route>
            <Route path="/success" element={<OrderSuccess/>}></Route>
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );

}

export default App;
