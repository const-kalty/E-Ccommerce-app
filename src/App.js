import {Route, Routes} from "react-router-dom";
import "./App.css";
import Checkout from "./components/checkout/Checkout";
import Authentication from "./components/routes/authentication/Authentication";
import Home from "./components/routes/home/Home";
import Navigation from "./components/routes/navigation/Navigation";
import Shop from "./components/routes/shop/Shop";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/checkout" element={<Checkout/>} />
      </Route>
    </Routes>
  );
}

export default App;
