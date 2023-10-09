import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredMyDonation } from './LocalStorageMyDonation';
import MyDonated from './MyDonated';

const DonatedPage = () => {
    const donates = useLoaderData();
    const [myDonate, setMyDonate] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        const storedMyDonationId = getStoredMyDonation();

        if (donates.length > 0 && storedMyDonationId.length > 0) {
            const donated = [];
            for (const data of storedMyDonationId) {
                const donate = donates.find(donate => donate.id === data.id);
                if (donate) {
                    donated.push(donate);
                }
            }
            setMyDonate(donated);
        } else {
            setMyDonate([]);
        }
    }, [donates]);

    const toggleShowAll = () => {
        setShowAll(!showAll);
    };

    return (
        <>
        <div className='content-box grid grid-col-1 md:grid-cols-2 gap-10'>
            {myDonate.slice(0, showAll ? myDonate.length : 4).map(donate => (
                <MyDonated key={donate.id} donate={donate} />
            ))}
           
        </div>
        {myDonate.length >= 4 && (
                <div className='text-center'><button className='btn btn-info' onClick={toggleShowAll}>
                {showAll ? 'Show Less' : 'Show All'}
            </button></div>
            )}
        </>
        
    );
};

export default DonatedPage;
