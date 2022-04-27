import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const User = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/user')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);

    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure to delete ? ');
        if (proceed) {
            console.log('delete', id);
            const url = `http://localhost:5000/user/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log('deleted successful');
                        const remaing = users.filter(user => user._id !== id);
                        setUsers(remaing)
                    }
                })
        }
    }
    return (
        <div>
            <h2>Avaiable users {users.length}</h2>
            <ul >
                {
                    users.map(user => <li className='p-3' key={user._id}> {user.name} === {user.email}
                        <Link to={`/update/${user._id}`}> <button>Update</button></Link>
                        <button onClick={() => handleDeleteUser(user._id)} className='m-2 btn-danger'>x</button></li>)
                }
            </ul>
        </div>
    );
};

export default User;