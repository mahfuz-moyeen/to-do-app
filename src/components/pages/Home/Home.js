import React, { useEffect, useState } from 'react';
import AddForm from './AddForm';
import ShowList from './ShowList';

const Home = () => {
    const [lists, setLists] = useState([]);
    const [reload, setReload] = useState(false);

    useEffect(() => {
        fetch('http://localhost:5000/lists')
            .then(res => res.json())
            .then(data => setLists(data))
    }, [reload])

    return (
        <div>
            <div>
                <h1 className='text-center my-10 text-4xl'>To-do app</h1>
            </div>
            <AddForm setReload={setReload} reload={reload} />
            <div className='w-10/12 mx-auto grid grid-cols-1 gap-5'>
                {
                    lists.map(list => <ShowList
                        key={list?._id}
                        list={list}
                        reload={reload}
                        setReload={setReload} />)
                }
            </div>
        </div>
    );
};

export default Home;