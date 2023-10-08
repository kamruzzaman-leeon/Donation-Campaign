// import { useEffect, useState } from 'react';
// import { useLoaderData } from 'react-router-dom';
// import { getStoredMyDonation, saveMyDonation } from './LocalStorageMyDonation';
// import MyDonated from './MyDonated';

// const DonatedPage = () => {
//     const donates = useLoaderData();

//     const [myDonate, setMyDonate] = useState([])



//     useEffect(() => {
//         const storedMyDonationId = getStoredMyDonation();
//         if (donates.length > 0) {
//             // const donated = donates.filter(donate =>storedMyDonationId.includes(donate.id));
//             const donated = [];

//             for (const id of storedMyDonationId) {
//                 const donate = donates.find(donate => donate.id === id);
//                 if (donate) {
//                     donated.push(donate);
//                 }
//             }
//             setMyDonate(donated);

//         }
//     }, [])



//     return (
//         <div className=' content-box grid grid-col-1 md:grid-cols-2 gap-10'>
//             {

//                 myDonate.map(donate =>
//                     <MyDonated key={donate.id}
//                         donate={donate}
//                     ></MyDonated>
//                 )
//             }

//         </div>
//     );
// };

// export default DonatedPage;

import React from 'react';

const DonatedPage = () => {
    return (
        <div>
            
        </div>
    );
};

export default DonatedPage;