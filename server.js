const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 4517;

app.use(cors());

const HARVARD_API_KEY = process.env.HARVARD_API_KEY;
const HARVARD_API_URL = 'https://api.harvardartmuseums.org';
const VA_API_URL = 'https://api.vam.ac.uk/v2';


app.get('/api/harvard/objects', async (request, response) => {
    try {
        const response = await axios.get(`${HARVARD_API_URL}/object`, {
            params: { ...request.query, apikey: HARVARD_API_KEY }
        });
        response.json(response.data);
    } catch (error) {
        console.error("Error fetching Harvard data:", error);
        response.status(500).json({ message: "Error fetching Harvard data" });
    }
});


app.get('/api/va/objects', async (req, res) => {
    try {
        const response = await axios.get(`${VA_API_URL}/objects/search`, { params: req.query });
        res.json(response.data);
    } catch (error) {
        console.error("Error fetching V&A data:", error);
        res.status(500).json({ message: "Error fetching V&A data" });
    }
});


app.get('/api/harvard/objects/:id', async (req, res) => {
    try {
        const response = await axios.get(`${HARVARD_API_URL}/object/${req.params.id}`, {
            params: { apikey: HARVARD_API_KEY }
        });
        res.json(response.data);
    } catch (error) {
        console.error("Error fetching Harvard object by ID:", error);
        res.status(500).json({ message: "Error fetching Harvard object by ID" });
    }
});


app.get('/api/va/objects/:id', async (req, res) => { console.log(req.params)
    try {
        const response = await axios.get(`${VA_API_URL}/objects/${req.params.id}`);
        res.json(response.data);
        console.log(req.params.id, "what comes up here!")
    } catch (error) {
        console.error("Error fetching V&A object by ID:", error);
        res.status(500).json({ message: "Error fetching V&A object by ID" });
    }
});

app.listen(port, () => {
    console.log(`Backend server running on port ${port}`);
});
