import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./homeKMV";
import Redes from "./socialMediaKMV"
import Cart from "./cartKMV";
import Navbar from "./navbarKMV";
import Footer from "./footer";
import RightsKMV from "./rightsKMV.js";
import Header from "./headerKMV";
import EnviosKMV from "./enviosKMV";
import Article from "./article";
import Proveedor from "./Proveedor";
import Carousel from "./carousel";

const RoutesKMV = () => {
    return(   
        <Router>
            <EnviosKMV />
            <Navbar/>
				<Header />
				<Article />
            <Routes>
                <Route path="/" element={ <Home/>}/>
                <Route path="/cart" element={ <Cart/>}/>
            </Routes>
            <Proveedor/>
            <Carousel />
            <Redes/>
            <Footer />
            <RightsKMV />
        </Router>
    )
}

export default RoutesKMV;

