import React from 'react';

const ShowList = ({ list, refetch }) => {

    const { _id, name, description } = list;

    const handleComplete = id => {
        fetch(`http://localhost:5000/list/${id}`, {
            method: "PUT",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                refetch()
            });
    }

    const handleDelete = id => {
        fetch(`http://localhost:5000/list/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                refetch()
            });
    }


    return (
        <div className='flex justify-center gap-4'>
            {list?.taskComplete ?
                <div className='flex gap-2 line-through'>
                    <h1>{name}</h1>
                    <h1>{description}</h1>
                </div>
                :
                <div className='flex gap-2 '>
                    <h1>{name}</h1>
                    <h1>{description}</h1>
                </div>
            }
            <button onClick={() => handleComplete(_id)} className='p-2 bg-green-500 text-white'>Complete</button>

            <button onClick={() => handleDelete(_id)} className='p-2 bg-red-500 text-white'>Delete</button>
        </div>
    );
};

export default ShowList;