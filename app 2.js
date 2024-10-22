const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/.netlify/functions/submitAppointment', (req, res) => {
    const { name, address, phone, email, occupation, appointmentType, symptoms, medication, otherInfo } = req.body;

    // Here you would handle the data, like saving it to a database
    console.log('Received appointment request:', req.body);

    // Send a success response
    res.json({ success: true, message: 'Appointment booked successfully' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
