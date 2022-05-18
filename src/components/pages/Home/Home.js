import React from 'react';
import { useQuery } from 'react-query';
import AddForm from './AddForm';
import ShowList from './ShowList';
import bg from '../../../image/bg.jpg'
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../../firebase.init';
import Spinner from '../../Shared/Spinner.js/Spinner';

const Home = () => {
    const [user, loading] = useAuthState(auth);


    const { isLoading, data: lists, refetch } = useQuery('repoData', () =>
        fetch(`https://to-do-app121.herokuapp.com/lists?email=${user.email}`).then(res =>
            res.json()
        ))

    if (loading || isLoading) {
        return <Spinner />
    }

    return (
        <div style={{ background: `url(${bg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed' }} className='min-h-screen' >

            <div className='w-11/12 lg:w-8/12 mx-auto flex flex-col justify-center min-h-screen'>
                <div className='flex justify-end'>
                    <button onClick={() => signOut(auth)}
                        className=' btn btn-ghost text-black'>logout</button>
                </div>
                <h1 className='text-center text-primary font-semibold my-10 text-2xl lg:text-4xl'>TO-DO APP</h1>


                <AddForm refetch={refetch} />

                {/* show list or task  */}
                <div className='w-11/12 lg:w-10/12 mx-auto my-10'>
                    <div className='grid grid-cols-1 gap-5'>
                        {
                            lists.map(list => <ShowList
                                key={list?._id}
                                list={list}
                                refetch={refetch} />)
                        }
                    </div>
                </div>
            </div>


        </div >
    );
};

export default Home;