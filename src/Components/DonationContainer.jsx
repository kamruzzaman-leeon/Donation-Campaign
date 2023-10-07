import { useLoaderData } from 'react-router-dom';
import DonationCard from './DonationCard';

const DonationContainer = () => {
    const donations = useLoaderData();
     
   
    return (
        <div className='content-box grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
            {
                donations.map(donation => <DonationCard key={donation.id} donation ={donation}></DonationCard>)
            }
        </div>
    );
};

export default DonationContainer;