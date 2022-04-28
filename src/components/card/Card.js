import React from 'react';
import './card.css'
import { Link } from 'react-router-dom';

const Card = ({ pet }) => {

    const photo = pet.photos[0] ? pet.photos[0].small : pet.photos[1] ? pet.photos[1].small : null
    return (
        <Link to={`/animals/${pet.id}`} className="card">
            <div className="card-img">
                <img src={photo || ""} alt={photo ? pet.species : " -I don't have image"} />
                <div className="card-group__link">
                    <div className="card-icon">
                        <a href="#"><i className='bx bx-heart'></i></a>
                        <a href="#"><i className='bx bx-search-alt-2' ></i></a>
                    </div>
                    <a className="card-buy" href="#"><span>Adoption</span></a>
                </div>
            </div>
            <div className="card-info">
                <span className="card-info__id">ID: {pet.id}</span>
                <h3 className="card-info__name">{pet.name}</h3>
                <span className="card-info__price">Species: {pet.species}</span>
            </div>
        </Link>

    );
};

export default Card;