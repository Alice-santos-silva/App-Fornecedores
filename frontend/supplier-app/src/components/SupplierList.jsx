// src/components/SupplierList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SupplierList = () => {
    const [suppliers, setSuppliers] = useState([]);

    useEffect(() => {
        const fetchSuppliers = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/suppliers');
                setSuppliers(response.data);
            } catch (err) {
                console.error(err);
            }
        };

        fetchSuppliers();
    }, []);

    return (
        <div>
            <h2>Supplier List</h2>
            <ul>
                {suppliers.map((supplier) => (
                    <li key={supplier._id}>{supplier.name} - {supplier.email} - {supplier.phone} - {supplier.company}</li>
                ))}
            </ul>
        </div>
    );
};

export default SupplierList;
