import "./App.css";
import { useState } from "react";
import { Routes, Route, NavLink} from "react-router-dom";
import Counter from "./components/Counter";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import TestError from "./components/TestError";
import ReducerCounter from "./components/ReducerCounter";
import imgSrc from  './assets/icons8-hamburger-menu-32.png';
import Menu from "./components/Menu";

function App() {
  const [showMenu, setShowMenu] = useState(false)
  return (
    <main className="App">
      <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/counter">Counter</NavLink>
      <NavLink to="/testErrorBoundary">Test Error boundary</NavLink>
      <figure 
         className="hamburger-menu"
         onClick={() => setShowMenu(prev => !prev)}
         >
        <img src={imgSrc} alt="hamburger menu img"/>
      </figure>
      </nav>
      <Menu  
         setShowMenu={setShowMenu}
         showMenu={showMenu}/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/reducerCounter" element={<ReducerCounter />} />
        <Route path="/testErrorBoundary" element={<TestError />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}
export default App;

/*
Setup a custom counter hook with increment, decrement, reset, 
setValue functions with a valid UI and Implement a combination 
of states with a useReducer that implements a counter with the 
four evident features in the custom hook -  increment, 
decrement, reset, setValue. Implement a page for the 
custom hook, useReducer, 404, and a page to test error 
boundary and good SEO.

*/
