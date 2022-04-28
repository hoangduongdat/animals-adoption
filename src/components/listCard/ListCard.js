import React from 'react';
import Card from '../card/Card';
import './listcard.css'
const ListCard = ({ pets }) => {
    return (
        <div className="listcard">
            {
                pets.map((pet, index) => (<Card pet={pet} key={index} />))
            }
        </div>
    );
};

export default ListCard;