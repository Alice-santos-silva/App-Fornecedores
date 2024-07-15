// src/App.js
import React from 'react';
import SupplierForm from './components/SupplierForm';
import SupplierList from './components/SupplierList';

const App = () => {
    return (
        <div>
            <h1>Supplier Management</h1>
            <SupplierForm />
            <SupplierList />
        </div>
    );
};

export default App;
