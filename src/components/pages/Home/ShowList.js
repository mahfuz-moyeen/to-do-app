import React from 'react';
import { CheckCircleIcon, TrashIcon } from '@heroicons/react/outline'

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
        <div className='flex justify-between glass text-black p-2 rounded-lg items-center'>
            <div className='p-2'>
                <h1 className='text-lg lg:text-xl text-primary'>{name}</h1>
                <p className='text-sm lg:text-lg break-all'>{description}</p>
            </div>
            <div className='flex justify-center gap-2'>
                <div className="tooltip" data-tip="Complete">
                    <button onClick={() => handleComplete(_id)} className='btn btn-success'><CheckCircleIcon className="h-5 w-5 text-white" /></button>
                </div>
                <div className="tooltip" data-tip="Delete">
                    <button onClick={() => handleDelete(_id)} className='btn btn-error'><TrashIcon className="h-5 w-5 text-white" /></button>
                </div>
            </div>
        </div >
    );
};

export default ShowList;