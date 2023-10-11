import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const learning = useLoaderData();
    return (
        <div>
            <h1>this is home page:{learning.length}</h1>
        </div>
    );
};

export default Home;