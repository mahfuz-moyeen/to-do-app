import React from 'react';

const ShowList = ({ list }) => {
    const { name, description } = list;
    return (
        <div className='flex justify-center gap-4'>
            <h1>{name}</h1>
            <h1>{description}</h1>
        </div>
    );
};

export default ShowList;