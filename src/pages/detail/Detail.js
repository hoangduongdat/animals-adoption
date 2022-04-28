import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './detail.css'

import { useEffect, useContext, useState } from 'react';
import { authContext } from '../../context/AuthContext';
import Loading from '../../components/loading/Loading';

const Detail = () => {
    const { id } = useParams()
    const { accessToken } = useContext(authContext)
    const [isLoading, setIsLoading] = useState(false)
    const [petDetail, setPetDetail] = useState()

    useEffect(() => {
        const fetchPet = async () => {
            try {
                setIsLoading(true)
                const res = await fetch(`https://api.petfinder.com/v2/animals/${id}`, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`,
                    },
                })
                const pet = await res.json()
                setPetDetail(pet.animal)
                setIsLoading(false)
            } catch (err) { }
        }
        fetchPet()
    }, [accessToken])


    return (
        <div className="detail">
            {isLoading ? <Loading /> : (
                <div className="container">
                    <Link to="/" className="btn-adoption">Back Home</Link>
                    <div className="banner"></div>
                    {petDetail ? (
                        <div className="petDetail">
                            <img
                                src={petDetail.photos.length > 0 ? petDetail.photos[0].small : ""}
                                alt={petDetail.photos[0] ? petDetail.species : " -I don't have image"} />
                            <div className="petDetail-info">
                                <h2 className="petDetail-info__name">{petDetail.name}</h2>
                                <span>{petDetail.description}</span>
                                <span>species: {petDetail.species}</span>
                                <span>gender: {petDetail.gender}</span>
                                <div className="pet-contact">
                                    <h3>Contact</h3>
                                    <span>City: {petDetail.contact.address.city ? petDetail.contact.address.city : "not found"} </span>
                                    <span>Email: {petDetail.contact.email}</span>
                                </div>
                                <a href={petDetail.url} target="_blank" className="btn-adoption">Adoption</a>
                            </div>
                        </div>
                    ) : ""}
                </div>
            )}
        </div>

    );
};

export default Detail;