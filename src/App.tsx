import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Index } from "./pages/Index/index.page";
import { Checkout } from "./pages/Checkout/checkout.page";
import { NavBar } from "./components/Navbar/Navbar.component";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<Index />} />
            <Route path="/checkout" element={<Checkout />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
