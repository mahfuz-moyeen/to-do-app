import React from 'react';

const AddForm = () => {

    const handleForm = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const description = event.target.description.value;
        console.log(name, description);
        event.target.reset();
    }

    return (
        <div>
            <form
                onSubmit={handleForm}
                className=' flex gap-4 justify-center'>
                <input className=' border-2 border-black p-1 text-black' type="text" name="name" placeholder='name' />

                <input className=' border-2 border-black p-1 text-black' type='text' name='description' placeholder='Description' />

                <input className='p-2 bg-blue-500' type="submit" value="ADD" />
            </form>
        </div>
    );
};

export default AddForm;