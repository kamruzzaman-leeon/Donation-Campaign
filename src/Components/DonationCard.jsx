import PropTypes from 'prop-types';

const DonationCard = ({ donation }) => {
    const {
        id,
        picture,
        title,
        category,
        category_bg,
        card_bg,
        text_button_bg,
        description,
        price
    } = donation;

    const cardColor = {
        backgroundColor: card_bg,
        color: text_button_bg, // Set the text color here
    };

    const categoryStyle = {
        backgroundColor: category_bg,
        color: text_button_bg,
        border: 'none',
        outline:'none',
    };

    return (
        <div style={cardColor} className="card w-auto shadow-xl">
            <figure>
                <img src={picture} alt={title} className="w-full" />
            </figure>

            <div className="card-body">
                <div><button style={categoryStyle} className="btn ">{category}
                </button></div>
                <h2 className="card-title">{title}</h2>
            </div>
        </div>
    );
};

DonationCard.propTypes = {
    donation: PropTypes.object,
};

export default DonationCard;
