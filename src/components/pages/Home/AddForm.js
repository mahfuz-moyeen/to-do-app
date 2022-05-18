import React from 'react';

const AddForm = () => {

    const handleForm = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const description = event.target.description.value;

        fetch("http://localhost:5000/list", {
            method: "POST",
            headers: {
                "Content-type": "application/json",
            },
            
            body: JSON.stringify({
                name: name,
                description: description
            })
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });
        event.target.reset();
    }

    return (
        <div>
            <form
                onSubmit={handleForm}
                className=' flex gap-4 justify-center'>
                <input className=' border-2 border-black p-1 text-black' type="text" name="name" placeholder='name' required />

                <input className=' border-2 border-black p-1 text-black' type='text' name='description' placeholder='Description' required />

                <input className='p-2 bg-blue-500' type="submit" value="ADD" />
            </form>
        </div>
    );
};

export default AddForm;