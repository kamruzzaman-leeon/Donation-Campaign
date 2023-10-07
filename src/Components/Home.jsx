import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';


const Home = () => {
    return (
        <>
        <nav>
            <Navbar></Navbar>
        </nav>
        <main>
            <Outlet></Outlet>
        </main>
        </>
    );
};

export default Home;