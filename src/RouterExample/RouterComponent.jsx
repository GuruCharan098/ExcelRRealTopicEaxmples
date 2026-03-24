import { Routes, Route } from "react-router-dom";

import Home from "./RoutingPages/Home";
import About from "./RoutingPages/About";
import Navbar from "./RoutingPages/Navbar";

const RouterComponent = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </>
    )
}
export default RouterComponent;