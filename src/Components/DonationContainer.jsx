import PropTypes from 'prop-types';
import DonationCard from './DonationCard';

const DonationContainer = ({ donations }) => {



    return (
        <div className='content-box grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10'>
            {
                donations.map(donation => <DonationCard key={donation.id} donation={donation}></DonationCard>)
            }
        </div>
    );
};

DonationContainer.propTypes = {
    donations: PropTypes.array
}

export default DonationContainer;