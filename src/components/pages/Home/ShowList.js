import React from 'react';
import { CheckCircleIcon, TrashIcon } from '@heroicons/react/outline'
import { toast } from 'react-toastify';

const ShowList = ({ list, refetch }) => {

    const { _id, name, description} = list;

    const handleComplete = id => {
        fetch(`https://to-do-app121.herokuapp.com/list/${id}`, {
            method: "PUT",
        })
            .then((res) => res.json())
            .then((data) => {
                refetch()
                toast.success("Complete task")
            });
    }

    const handleDelete = id => {
        fetch(`https://to-do-app121.herokuapp.com/list/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                refetch()
                toast.error("Delete task")
            });
    }


    return (
        <div className='flex justify-between glass text-black p-2 rounded-lg items-center'>
            <div className='p-2'>
                { list?.taskComplete ?
                    <>
                        <h1 className='line-through text-lg lg:text-xl text-primary'>{name}</h1>
                        <p className='line-through text-sm lg:text-lg break-all'>{description}</p>
                    </>
                    :
                    <>
                        <h1 className='text-lg lg:text-xl text-primary'>{name}</h1>
                        <p className='text-sm lg:text-lg break-all'>{description}</p>
                    </>
                }
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