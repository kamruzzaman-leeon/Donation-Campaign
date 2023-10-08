import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import { toast } from 'react-toastify';
// import { saveMyDonation } from './LocalStorageMyDonation';


const DonationCard = ({ donation }) => {
    const {
        id,
        picture,
        title,
        category,
        category_bg,
        card_bg,
        text_button_bg,
    } = donation;

    const cardColor = {
        backgroundColor: card_bg,
        color: text_button_bg, // Set the text color here
    };

    const categoryStyle = {
        backgroundColor: category_bg,
        color: text_button_bg,
        border: 'none',
        outline: 'none',
    };

    // const handleMyDonation = () => {
    //     toast.success("you have successfully Donate! ");
    //     saveMyDonation(id);
        


    // }

    return (
    
        <Link to={`/donation/${id}`} style={cardColor} className="card w-auto shadow-xl">
            <figure>
                <img src={picture} alt={title} className="w-full" />
            </figure>

            <div className="card-body">
                <div><button style={categoryStyle} className="btn ">{category}
                </button></div>
                <h2 className="card-title">{title}</h2>
            </div>
        </Link>
    );
};

DonationCard.propTypes = {
    donation: PropTypes.object,
};

export default DonationCard;
