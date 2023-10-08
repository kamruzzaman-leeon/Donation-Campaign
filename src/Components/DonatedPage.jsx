import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { getStoredMyDonation } from './LocalStorageMyDonation';
import MyDonated from './MyDonated';

const DonatedPage = () => {
    const donates = useLoaderData();
    const [myDonate, setMyDonate] = useState([]);

    useEffect(() => {
        const storedMyDonationId = getStoredMyDonation();

        if (donates.length > 0 && storedMyDonationId.length > 0) {
            const donated = [];
            // console.log(storedMyDonationId)
            for (const data of storedMyDonationId) {
                const donate = donates.find(donate => donate.id == data.id);
                if (donate) {
                    donated.push(donate);
                }
            }
            setMyDonate(donated);
        } else {
            
            setMyDonate([]);
        }
    }, [donates]);
    // console.log(myDonate)
    return (
        <div className='content-box grid grid-col-1 md:grid-cols-2 gap-10'>
            {myDonate.map(donate => (
                <MyDonated key={donate.id} donate={donate} />
            ))}
        </div>
    );
};

export default DonatedPage;
