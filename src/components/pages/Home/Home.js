import React, { useEffect, useState } from 'react';
import AddForm from './AddForm';
import ShowList from './ShowList';

const Home = () => {
    const [lists, setLists] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/lists')
            .then(res => res.json())
            .then(data => setLists(data))
    }, [])

    return (
        <div>
            <div>
                <h1 className='text-center my-10 text-4xl'>To-do app</h1>
            </div>
            <AddForm />
            <div className='w-10/12 mx-auto'>
                {
                    lists.map(list => <ShowList
                        key={list?._id}
                        list={list} />)
                }
            </div>
        </div>
    );
};

export default Home;