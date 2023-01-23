import { Route, Routes} from "react-router-dom";
import "./App.css";
import Authentication from "./components/routes/authentication/Authentication";
import Home from "./components/routes/home/Home";
import Navigation from "./components/routes/navigation/Navigation";




function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/auth" element={<Authentication/>} />
      </Route>
    </Routes>
  );
}

export default App;
