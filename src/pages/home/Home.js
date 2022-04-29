import React from 'react';
import { useEffect, useState, useContext } from 'react'
import './home.css'

import { authContext } from './../../context/AuthContext';
import ListCard from './../../components/listCard/ListCard';
import Pagination from './../../components/pagination/Pagination';
import Navigate from './../../components/navigate/Navigate';
import { useLocation } from 'react-router-dom';
import Loading from '../../components/loading/Loading';
import GoToTop from '../../components/gototop/GoToTop';

const Home = () => {
    const [pets, setPets] = useState([])
    const [page, setPage] = useState(1)
    const [isLoading, setIsLoading] = useState(false)
    const [totalPage, setTotalPage] = useState(20)
    const { accessToken } = useContext(authContext);
    const { pathname } = useLocation()
    // /cat->cat
    const type = pathname.slice(1)

    useEffect(() => {
        setPage(1)
    }, [pathname])

    useEffect(() => {
        if (accessToken === null) return;
        const fetchPets = async () => {
            try {
                setIsLoading(true);
                const petResults = await fetch(
                    `https://api.petfinder.com/v2/animals?type=${type}&page=${page}`,
                    {
                        headers: {
                            Authorization: `Bearer ${accessToken}`,
                        },
                    }
                );
                const json = await petResults.json();
                const petsdata = json.animals
                setTotalPage(json.pagination.total_pages)
                setPets(petsdata)
                setIsLoading(false);
            } catch (err) {
                console.log(err);
            }
        };
        fetchPets();
    }, [accessToken, page, type]);

    return (
        <div className="homepage">
            <div className="container">
                <div className="banner"></div>
                <Navigate />

                {isLoading ? <Loading /> : (
                    <ListCard pets={pets} />
                )}

                <Pagination
                    totalPage={totalPage}
                    setPage={setPage}
                    page={page}
                />
            </div>
            <GoToTop />
        </div>
    );
};

export default Home;