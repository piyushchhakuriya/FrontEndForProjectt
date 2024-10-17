import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const res = await axios.get('http://localhost:8000/api/users');
                setUsers(res.data);
            } catch (error) {
                console.error('Error fetching users', error);
            }
        };
        fetchUsers();
    }, []);

    return (
        <div>
            <h2>User Submissions</h2>
            <ul>
                {users.map(user => (
                    <li key={user._id}>
                        <p>Name: {user.name}</p>
                        <p>Social Media: {user.socialMediaHandle}</p>
                        <div>
                            {user.images.map((image, index) => (
                                <img key={index} src={`http://localhost:5000/${image}`} alt={`Uploaded by ${user.name}`} style={{ width: '100px', margin: '5px' }} />
                            ))}
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default AdminDashboard;
