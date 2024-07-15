const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/supplierDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// Supplier schema and model
const supplierSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    company: String
});

const Supplier = mongoose.model('Supplier', supplierSchema);

// Routes
app.post('/api/suppliers', async (req, res) => {
    const newSupplier = new Supplier(req.body);
    try {
        await newSupplier.save();
        res.status(201).json(newSupplier);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

app.get('/api/suppliers', async (req, res) => {
    try {
        const suppliers = await Supplier.find();
        res.json(suppliers);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
