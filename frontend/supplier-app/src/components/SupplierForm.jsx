// src/components/SupplierForm.js
import React, { useState } from 'react';
import axios from 'axios';

const SupplierForm = () => {
    const [supplier, setSupplier] = useState({
        name: '',
        email: '',
        phone: '',
        company: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSupplier({ ...supplier, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/suppliers', supplier);
            alert('Supplier added successfully');
            setSupplier({ name: '', email: '', phone: '', company: '' });
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name:</label>
                <input type="text" name="name" value={supplier.name} onChange={handleChange} required />
            </div>
            <div>
                <label>Email:</label>
                <input type="email" name="email" value={supplier.email} onChange={handleChange} required />
            </div>
            <div>
                <label>Phone:</label>
                <input type="text" name="phone" value={supplier.phone} onChange={handleChange} required />
            </div>
            <div>
                <label>Company:</label>
                <input type="text" name="company" value={supplier.company} onChange={handleChange} required />
            </div>
            <button type="submit">Add Supplier</button>
        </form>
    );
};

export default SupplierForm;
