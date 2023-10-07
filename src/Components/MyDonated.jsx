import React from 'react';
import PropTypes from 'prop-types';
const MyDonated = ({ donate }) => {
    const {
        id,
        picture,
        title,
        category,
        category_bg,
        card_bg,
        text_button_bg,
        price,
    } = donate;

    const cardColor = {
        backgroundColor: card_bg,
        color: text_button_bg, 
    };

    const categoryStyle = {
        backgroundColor: category_bg,
        color: text_button_bg,
        border: 'none',
        outline: 'none',
    };


    return (
        <div  style={cardColor} className="card w-auto shadow-xl flex flex-row">
            <figure>
                <img src={picture} alt={title} className="w-full" />
            </figure>

            <div className="card-body">
                <div><button style={categoryStyle} className="btn ">{category}
                </button></div>
                <h2 className="card-title text-black text-2xl font-bold">{title}</h2>
                <p className='font-bold'>{price}</p>
                <div><button style={{backgroundColor:text_button_bg}} className="capitalize btn text-white font-bold ">View Details
                </button></div>
            </div>
        </div>
    );
};

MyDonated.propTypes = {
    donate: PropTypes.object
}

export default MyDonated;