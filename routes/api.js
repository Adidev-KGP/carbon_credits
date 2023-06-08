const express = require('express');
const dataController = require('../controllers/dataController');

const router = express.Router();

// GET /api/data - Retrieve all data
router.get('/data', dataController.getData);


// // GET /api/data/:id - Retrieve data by ID
// router.get('/data/:id', dataController.getDataById);

// // POST /api/data - Create new data
// router.post('/data', dataController.createData);

// // PUT /api/data/:id - Update data by ID
// router.put('/data/:id', dataController.updateData);

// // DELETE /api/data/:id - Delete data by ID
// router.delete('/data/:id', dataController.deleteData);

module.exports = router;
