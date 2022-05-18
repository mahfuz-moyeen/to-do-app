import React from 'react';

const ShowList = ({ list, reload, setReload }) => {

    const { _id, name, description } = list;

    const handleDelete = id => {
        fetch(`http://localhost:5000/list/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                setReload(!reload)
            });
    }

    return (
        <div className='flex justify-center gap-4'>
            <h1>{name}</h1>
            <h1>{description}</h1>
            <button onClick={() => handleDelete(_id)} className='p-2 bg-red-500 text-white'>Delete</button>
        </div>
    );
};

export default ShowList;