import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";


const MainPage = () => {
    return (
        <div>
                
            <nav className="container mx-auto relative">
                <Navbar></Navbar>
                               
            </nav>
            <main>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default MainPage;

