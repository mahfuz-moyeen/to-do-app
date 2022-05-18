import React from 'react';
import AddForm from './AddForm';

const Home = () => {
    return (
        <div>
            <div>
                <h1 className='text-center my-10 text-4xl'>To-do app</h1>
            </div>
            <AddForm />
        </div>
    );
};

export default Home;