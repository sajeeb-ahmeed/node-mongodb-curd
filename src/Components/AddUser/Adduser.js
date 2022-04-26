import React from 'react';

const Adduser = () => {
    const handleCreateUser = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const user = { name, email };
        console.log(user);
        //send data to server
        fetch('http://localhost:5000/user', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                alert('user added successfully');
                event.target.reset();
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }
    return (
        <div>
            <h1>Please add a new user</h1>

            <form onSubmit={handleCreateUser} >
                <input className='mb-2 mt-5 px-4 py-2  border' type="text" name="name" id="name" placeholder=' Name' required /> <br /> <br />

                <input className='mb-2 px-4 py-2  border' type="email" name="email" id="email" placeholder=' Email' required /> <br /><br />
                <input className='mb-2 p-2' type="submit" value="Add User" />
            </form>
        </div>
    );
};

export default Adduser;