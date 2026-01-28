import { Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Services from "./pages/Services";

import Counter from "./component/Counter";

import UseState from "./Hooks/UseState";
import UseEffect from "./Hooks/UseEffect";
import UseEffectApi from "./Hooks/UseEffectApi";
import UseRef from "./Hooks/UseRef";
import Hook from "./Hooks/Hook";

import Login from "./Auth/login";
import Signup from "./Auth/Signup";

const App = () => {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home name="Mammu" />} />
        <Route path="/about" element={<About name="Mammu" age={20} dept="CS&DS" />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Hooks Nested Routes */}
        <Route path="/hook" element={<Hook />}>
          <Route path="useState" element={<UseState />} />
          <Route path="useEffect" element={<UseEffect />} />
          <Route path="useEffectApi" element={<UseEffectApi />} />
          <Route path="useRef" element={<UseRef />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
