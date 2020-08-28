import React, { useState, useEffect } from 'react';
import './Results.css';
import VideoCard from './VideoCard';
import axios from './axios';
import FLipMove from 'react-flip-move';

function Results({selectedOption}) {
    const [movies, setMovies] = useState([]); 
    useEffect(() => {
        async function fetchData() {
            const response = await axios.get(selectedOption);
            setMovies(response.data.results);
            return response;
        }
        fetchData();
    }, [selectedOption])
    return (
        <div className='results'>
            <FLipMove>
                {movies.map((movie) => {
                    return <VideoCard key={movie.id} movie={movie}/>
                })}
            </FLipMove>
        </div>
    );
};

export default Results;
