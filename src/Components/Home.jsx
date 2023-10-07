import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import DonationContainer from "./DonationContainer";
import { useState } from "react";

const Home = () => {
    // const donations = useLoaderData();
    const [categories, setCategories]=useState(useLoaderData());
    return (
        <div>
            <Banner setCategories={setCategories}></Banner>
            <DonationContainer donations={categories}></DonationContainer>
            
        </div>
    );
};

export default Home;