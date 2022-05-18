import React from 'react';
import { useQuery } from 'react-query';
import AddForm from './AddForm';
import ShowList from './ShowList';

const Home = () => {

    const { isLoading, data: lists, refetch } = useQuery('repoData', () =>
        fetch('http://localhost:5000/lists').then(res =>
            res.json()
        ))

    if (isLoading) {
        return <p>loading....</p>
    }

    return (
        <div>
            <div>
                <h1 className='text-center my-10 text-4xl'>To-do app</h1>
            </div>
            <AddForm refetch={refetch} />
            <div className='w-10/12 mx-auto grid grid-cols-1 gap-5'>
                {
                    lists.map(list => <ShowList
                        key={list?._id}
                        list={list}
                        refetch={refetch} />)
                }
            </div>
        </div>
    );
};

export default Home;