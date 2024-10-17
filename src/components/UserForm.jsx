import React, { useState } from 'react';
import axios from 'axios';

const UserForm = () => {
    const [name, setName] = useState('');
    const [socialMediaHandle, setSocialMediaHandle] = useState('');
    const [images, setImages] = useState([]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('name', name);
        formData.append('socialMediaHandle', socialMediaHandle);
        images.forEach(image => formData.append('images', image));

        try {
            await axios.post('http://localhost:8000/api/users', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            alert('User created successfully!');
        } catch (error) {
            console.error('Error uploading data', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="text" placeholder="Social Media Handle" value={socialMediaHandle} onChange={(e) => setSocialMediaHandle(e.target.value)} required />
            <input type="file" multiple onChange={(e) => setImages([...e.target.files])} required />
            <button type="submit">Submit</button>
        </form>
    );
};

export default UserForm;
