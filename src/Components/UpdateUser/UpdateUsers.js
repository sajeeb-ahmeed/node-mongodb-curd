import React from 'react';
import { useParams } from 'react-router-dom';

const UpdateUsers = () => {
    const { id } = useParams();
    const handleUpdateUser = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const updateUser = { name, email };
        // console.log(user);
        //send data to server
        const url = `http://localhost:5000/user/${id}`;
        fetch(url, {
            method: 'PUT', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updateUser),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                alert('user update successfully');
                event.target.reset();
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    return (
        <div>
            <h2>updateing user:  {id}</h2>
            <form onSubmit={handleUpdateUser} >
                <input className='mb-2 mt-5 px-4 py-2  border' type="text" name="name" id="name" placeholder=' Name' required /> <br /> <br />

                <input className='mb-2 px-4 py-2  border' type="email" name="email" id="email" placeholder=' Email' required /> <br /><br />
                <input className='mb-2 p-2' type="submit" value="Update User" />
            </form>
        </div>
    );
};

export default UpdateUsers;