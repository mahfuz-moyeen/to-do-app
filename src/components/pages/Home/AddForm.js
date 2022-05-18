import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import Spinner from '../../Shared/Spinner.js/Spinner';

const AddForm = ({ refetch }) => {

    const [user, loading] = useAuthState(auth);

    if (loading) {
        return <Spinner />
    }
    const handleForm = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const description = event.target.description.value;

        fetch("https://to-do-app121.herokuapp.com/list", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },

            body: JSON.stringify({
                email:user.email,
                name: name,
                description: description
            })
        })
            .then((res) => res.json())
            .then((data) => {
                refetch();
                toast.success('add task')
            });
        event.target.reset();
    }



    return (
        <div>
            <form
                onSubmit={handleForm}
                className='flex gap-4 justify-center'>

                <div className="relative z-0">
                    <input
                        type="text"
                        name='name'
                        id="floating_task_name"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
                        placeholder=" "
                        autoComplete='off'
                        required />

                    <label htmlFor="floating_task_name" className="absolute text-sm text-primary duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Name</label>
                </div>


                <div className="relative z-0">
                    <input
                        type="text"
                        name='description'
                        id="floating_description"
                        className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-primary appearance-none focus:outline-none focus:ring-0 focus:border-secondary peer"
                        placeholder=" "
                        autoComplete='off'
                        required />

                    <label htmlFor="floating_description" className="absolute text-sm text-primary  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-secondary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Description</label>
                </div>

                <input className='p-2 btn btn-secondary' type="submit" value="ADD" />
            </form>
        </div>
    );
};

export default AddForm;